import React from "react";
import Userpic from "../UserPic";
import LikeIcon from "../Icons/Like";
import CommentIcon from "../Icons/Comment";
import OptionsIcon from "../Icons/Options";
import ShareIcon from "../Icons/Share";

const Post = ({ title }: { title: string }) => {
	return (
		<div className="flex rounded-md bg-blue-100 px-8 py-4">
			<div className="mr-2 w-1/6">
				<div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-blue-200">
					<Userpic height={50} width={50} />
				</div>
			</div>
			<div className="flex-1 space-y-4 text-left">
				<div className="pt-1">
					<span>Surya Vivek</span>
					<p className="text-sm">@username</p>
				</div>
				<p className="">{title}</p>
				<div className="flex w-full justify-between pr-4">
					<LikeIcon />
					<CommentIcon />
					<ShareIcon />
					<OptionsIcon />
				</div>
			</div>
		</div>
	);
};

export default Post;
