import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import Layout from "~/components/Layout";
import LoadingSpinner from "~/components/icons/LoadingSpinner";
import { api } from "~/utils/api";

const Settings: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dev Network | Settings</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="mb-4 mr-8 h-[calc(100vh-10rem)] w-full">
          <SettingsWrapper />
        </div>
      </Layout>
    </>
  );
};

const SettingsWrapper = () => {
  const { data: session, update: updateSession } = useSession();
  const ctx = api.useContext();
  const { mutate, isLoading } = api.user.updateUserInfo.useMutation({
    onSuccess: async () => {
      toast.success("Updated Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      await ctx.user.invalidate();
      await updateSession();
    },
    onError: () => toast.error("Something went wrong!"),
  });

  const [userInfo, setUserInfo] = useState({
    name: session?.user.name || "",
    username: session?.user.username || "",
    bio: session?.user.bio || "",
  });

  useEffect(() => {
    if (session?.user.name) {
      setUserInfo({
        name: session?.user.name,
        username: session.user.username,
        bio: session.user.bio,
      });
    }
  }, [session]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!userInfo.username || !userInfo.name || !userInfo.bio) {
      alert("Empty fields are not accepted");
      return;
    }

    if (
      userInfo.name === session?.user.name &&
      userInfo.bio === session.user.bio &&
      userInfo.username === session.user.username
    ) {
      alert("You should change atleast one field!");
      return;
    }

    // if (userInfo.bio.length >= 160) {

    // }

    mutate({
      username: userInfo.username,
      name: userInfo.name,
      bio: userInfo.bio,
    });
  };

  if (!session) return <div>You have to log in.</div>;

  return (
    <div className="flex h-full w-full flex-col space-y-4 rounded-md border border-blue-2 bg-white p-4 dark:border-accent-8 dark:bg-black">
      <h2 className="text-xl">Edit your profile settings</h2>
      <div className="flex flex-grow justify-between space-x-8 p-4">
        <div className="relative h-24 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border border-blue-2">
          <Image
            src={session.user.image ?? "/user.png"}
            fill={true}
            alt="User photo"
          />
        </div>
        <div className="flex-grow">
          <form className="h-full w-full space-y-4 py-2">
            <div>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  disabled={isLoading}
                  value={userInfo.name || ""}
                  onChange={(e) =>
                    setUserInfo({
                      name: e.target.value,
                      username: userInfo.username,
                      bio: userInfo.bio,
                    })
                  }
                  className="w-full rounded-md border border-blue-2 px-4 py-2 outline-none focus:ring-1 focus:ring-blue-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-accent-6 dark:bg-accent-2 dark:focus:ring-accent-8"
                />
              </label>
            </div>
            <div>
              <label>
                <span>Username</span>
                <input
                  type="text"
                  value={userInfo.username}
                  onChange={(e) =>
                    setUserInfo({
                      name: userInfo.name,
                      username: e.target.value,
                      bio: userInfo.bio,
                    })
                  }
                  className="w-full rounded-md border border-blue-2 px-4 py-2 outline-none focus:ring-1 focus:ring-blue-2 dark:border-accent-6 dark:bg-accent-2 dark:focus:ring-accent-8"
                />
              </label>
            </div>
            <div>
              <label>
                <span>Bio</span>
                <textarea
                  value={userInfo.bio}
                  onChange={(e) =>
                    setUserInfo({
                      bio: e.target.value,
                      name: userInfo.name,
                      username: userInfo.username,
                    })
                  }
                  className="w-full resize-none rounded-md border border-blue-2 px-4 py-2 outline-none focus:ring-1 focus:ring-blue-2 dark:border-accent-6 dark:bg-accent-2 dark:focus:ring-accent-8"
                />
              </label>
            </div>
            <div className="flex w-full justify-end space-x-4">
              <button
                type="reset"
                className="rounded-md border border-blue-2 px-4 py-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="flex items-center space-x-2 rounded-md border border-blue-2 bg-blue-2 px-4 py-2 text-white duration-150 hover:brightness-90"
              >
                {isLoading && <LoadingSpinner />}
                <span>Update</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
