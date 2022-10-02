import React, { useState } from "react";
import Userpic from "./Userpic";
import Overlay from "./Overlay";

const PostForm = () => {
	const [isOverlay, setIsOverlay] = useState<boolean>(false);

	return (
		<div className="flex items-center justify-between rounded-md bg-blue-100 px-4 py-8">
			<div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-blue-200">
				<Userpic height={50} width={50} />
			</div>
			<div className="h-full w-4/5">
				<input
					type="text"
					onFocus={() => setIsOverlay(true)}
					className="w-full rounded-full border-none bg-blue-50 p-4 px-8 text-lg outline-none"
				/>
			</div>
			{isOverlay && <Overlay closeOverlay={setIsOverlay} />}
		</div>
	);
};

export default PostForm;
