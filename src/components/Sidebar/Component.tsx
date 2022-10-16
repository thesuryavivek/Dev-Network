import React from "react";
import Userpic from "../UserPic";
import { useAtom } from "jotai";
import { userAtom } from "../../utils/store";

const Component = () => {
	const [userDetails] = useAtom(userAtom);

	return (
		<div className="sticky top-10 flex w-full flex-col items-center rounded-md bg-blue-100 py-8 text-center">
			<div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-200">
				<Userpic height={80} width={80} hash={userDetails.userId} />
			</div>
			<div>
				<h6 className="mt-4 text-xl font-medium">{userDetails.name}</h6>
				<p className="text-sm">@{userDetails.username}</p>
				<p className="py-4 text-sm">Full stack developer</p>
			</div>
			<div className="w-full border border-t-blue-200 py-4">
				<span className="text-lg font-medium">Followers:</span>
				<p>100K</p>
			</div>
			<div className="w-full border border-t-blue-200 pt-4">
				<span className="text-lg font-medium">Following:</span>
				<p>150</p>
			</div>
		</div>
	);
};

export default Component;
