import type { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, type FC } from "react";
import FollowingListCard from "~/components/FollowingListCard";
import Layout from "~/components/Layout";
import PostComponent from "~/components/Post";
import ProfileCard from "~/components/ProfileCard";
import LoadingSpinner from "~/components/icons/LoadingSpinner";
import { api } from "~/utils/api";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="flex min-h-screen w-full justify-between gap-8">
        <Profile />

        <div className="hidden min-h-screen w-1/3 flex-shrink-0 space-y-8 md:block">
          <ProfileCard />
          <FollowingListCard />
        </div>
      </div>
    </Layout>
  );
};

const Profile = () => {
  const { query } = useRouter();
  const username = query.username as string;

  const { data, isLoading } = api.user.getUser.useQuery({ username });
  const user = data?.user;
  const isFollow = data?.isFollow;

  if (isLoading) {
    return (
      <div className="flex flex-grow items-center justify-center rounded-md border-blue-2 dark:border-accent-6 dark:bg-black md:border">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user?.username) {
    return <div>No user found for {username}</div>;
  }

  return (
    <div className="flex-grow rounded-md border-blue-2 bg-white dark:border-accent-6 dark:bg-black md:border">
      <div className="relative -mt-4 h-36 w-full rounded-t-md bg-accent-2/20 dark:bg-accent-2 md:mt-0">
        <div className="absolute left-8 top-full -translate-y-1/2 rounded-full bg-white p-1 dark:bg-black">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-none bg-blue-2 outline-none">
            {user.image && (
              <Image src={user?.image} fill={true} alt="Profile picture" />
            )}
          </div>
        </div>
      </div>
      <div className="px-8 pb-8 pt-16">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold capitalize">{user.name}</h2>
            <p className="text-sm">@{user.username}</p>
          </div>
          {isFollow === "own" ? (
            <EditProfileBtn />
          ) : (
            <FollowBtn
              isFollowedFromServer={isFollow as boolean}
              username={user.username}
            />
          )}
        </div>
        <p className="py-4">{user.bio}</p>
        <div className="space-x-4">
          <span>
            <span className="font-bold">{user._count.followedBy} </span>
            Followers
          </span>
          <span>
            <span className="font-bold">{user._count.following} </span>
            Following
          </span>
        </div>
      </div>

      <UserPosts user={user} />
    </div>
  );
};

const EditProfileBtn = () => {
  return (
    <Link
      href="/settings"
      className="rounded-md border px-4 py-2 font-bold duration-200 hover:bg-blue-2 hover:text-white dark:border-accent-8 dark:text-accent-8 dark:hover:border-blue-2 dark:hover:bg-black dark:hover:text-blue-2"
    >
      Edit profile
    </Link>
  );
};

type FollowBtnProps = {
  isFollowedFromServer: boolean;
  username: string;
};

const FollowBtn: FC<FollowBtnProps> = ({ isFollowedFromServer, username }) => {
  const { data: session } = useSession();
  const [isFollowed, setisFollowed] = useState(isFollowedFromServer);

  const ctx = api.useContext();

  const { mutate } = api.user.updateFollow.useMutation({
    onMutate: async ({ username }) => {
      await ctx.user.getUser.cancel();

      const prevUserSnapshot = ctx.user.getUser.getData();

      ctx.user.getUser.setData({ username }, (oldData) => {
        if (!oldData?.user || !oldData?.isFollow) return oldData;

        return {
          user: oldData?.user,
          isFollow: !oldData?.isFollow,
        };
      });

      return { username, prevUserSnapshot };
    },
    onError(error, _, utils) {
      if (!utils?.username) return;
      ctx.user.getUser.setData(
        { username: utils?.username },
        utils?.prevUserSnapshot
      );
      console.error(error.message);
    },

    onSettled() {
      void ctx.user.getUser.invalidate();
    },
  });

  const handleClick = () => {
    if (!session) {
      alert("You need to be logged in");
      return;
    }
    setisFollowed(!isFollowed);
    mutate({ username });
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-blue-2 px-4 py-2 font-bold text-accent-8 hover:brightness-75 disabled:cursor-not-allowed dark:bg-accent-8 dark:text-accent-2"
    >
      {isFollowed ? "Unfollow" : "Follow"}
    </button>
  );
};

const UserPosts = ({ user }: { user: User }) => {
  if (!user.username) return null;

  const { data, isLoading, isError, error } = api.post.getPosts.useQuery({
    username: user.username,
  });

  if (isLoading) {
    return (
      <div className="border-t border-blue-1 pt-4 text-center dark:border-accent-6">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (data?.length === 0) {
    return <div className="text-center">no data to show</div>;
  }

  return (
    <div>
      {data &&
        data.map((post) => {
          return (
            <div
              key={post.id}
              className="border-t border-blue-1 dark:border-accent-6"
            >
              <PostComponent post={post} />
            </div>
          );
        })}
    </div>
  );
};

export default ProfilePage;
