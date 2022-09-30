import React from "react";
import Image from "next/image";

const Component = () => {
	return (
		<div className="sticky top-24 flex w-full flex-col items-center rounded-md bg-blue-100 py-8 text-center">
			<div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-200">
				<Image
					src={`https://avatars.dicebear.com/api/micah/b.svg`}
					alt="avatar"
					height={80}
					width={80}
					// layout="responsive"
				/>
			</div>
			<div>
				<h6 className="my-4 text-xl font-medium">Surya Vivek</h6>
				<p className="pb-4 text-sm">Full stack developer</p>
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
