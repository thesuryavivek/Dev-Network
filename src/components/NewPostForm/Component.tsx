import React, { useState } from "react";
import Userpic from "../UserPic";
import Overlay from "./Overlay";
import { userAtom } from "../../utils/store";
import { useAtom } from "jotai";

const PostForm = () => {
	const [isOverlay, setIsOverlay] = useState<boolean>(false);
	const [userDetails, setUserDetails] = useAtom(userAtom);

	return (
		<div className="flex items-center justify-between rounded-md bg-blue-100 px-4 py-8">
			<div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-blue-200">
				<Userpic height={50} width={50} hash={userDetails.userId} />
			</div>
			<div className="h-full w-4/5 cursor-pointer">
				<input
					type="text"
					onFocus={() => setIsOverlay(true)}
					className="w-full cursor-pointer rounded-md border-none bg-blue-50 p-4 text-lg outline-none"
				/>
			</div>
			{isOverlay && <Overlay closeOverlay={setIsOverlay} />}
		</div>
	);
};

export default PostForm;
