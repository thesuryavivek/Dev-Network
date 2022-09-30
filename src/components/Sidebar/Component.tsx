import React from "react";
import Image from "next/image";

const Component = () => {
	return (
		<div className="w-60 rounded-md py-8 bg-blue-100 text-center flex flex-col items-center sticky top-24">
			<div className="h-32 w-32 flex justify-center items-center bg-blue-300 rounded-full">
				<Image
					src={"https://avatars.dicebear.com/api/micah/fun.svg"}
					alt="avatar"
					height={80}
					width={80}
					// layout="responsive"
				/>
			</div>
			<div>
				<h6 className="text-xl font-medium my-4">username</h6>
				<p className="text-sm pb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Accusantium, nam.
				</p>
			</div>
			<div className="border-t-blue-200 border w-full py-4">
				<span className="text-lg font-medium">Followers:</span>
				<p>100K</p>
			</div>
			<div className="border-t-blue-200 border w-full pt-4">
				<span className="text-lg font-medium">Following:</span>
				<p>150</p>
			</div>
		</div>
	);
};

export default Component;
