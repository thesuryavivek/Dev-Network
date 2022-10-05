import React, { useState, useEffect } from "react";
import Userpic from "../UserPic";
import LikeIcon from "../Icons/Like";
import CommentIcon from "../Icons/Comment";
import OptionsIcon from "../Icons/Options";
import ShareIcon from "../Icons/Share";
import { useQuery } from "@tanstack/react-query";
import { User } from "@prisma/client";

const PostComponent = ({
	title,
	authorId,
}: {
	title: string;
	authorId: number;
}) => {
	const { data, isLoading } = useQuery<User>(
		["UserByID", authorId],
		async () => {
			const res = await fetch(`/api/users/${authorId}`);
			const data = await res.json();
			return data;
		}
	);

	if (isLoading) {
		return <span className="animate-spin"></span>;
	}

	return (
		<div className="flex rounded-md bg-blue-100 px-8 py-4">
			<div className="mr-2 w-1/6">
				<div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-blue-200">
					<Userpic height={50} width={50} hash={data?.id} />
				</div>
			</div>
			<div className="flex-1 space-y-4 text-left">
				<div className="pt-1">
					<span>{data?.name}</span>
					<p className="text-sm">@{data?.username}</p>
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

export default PostComponent;
