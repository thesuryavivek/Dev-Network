import { type FC } from "react";
import type { Post } from "@prisma/client";
import Image from "next/image";
import Clock from "./icons/ClockIcon";
import LikeIcon from "./icons/LikeIcon";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type TPostComponent = {
  post: Post & {
    likes: {
      userId: string;
    }[];
    author: {
      username: string | null;
      name: string | null;
      image: string | null;
    };
  };
};

const PostComponent: FC<TPostComponent> = ({ post }) => {
  return (
    <div className="space-y-4 rounded-md bg-black p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            {post.author.image && (
              <Image src={post?.author.image} fill={true} alt="Author photo" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-bold capitalize">{post.author.name}</span>
            <span className="text-sm">@{post.author.username}</span>
          </div>
        </div>
        <span className="flex items-center space-x-2 text-sm opacity-80">
          <Clock />
          <span className="font-thin">{dayjs(post.createdAt).fromNow()}</span>
        </span>
      </div>
      <p>{post.content}</p>
      <LikeIcon likes={post.likes} postId={post.id} />
    </div>
  );
};

export default PostComponent;