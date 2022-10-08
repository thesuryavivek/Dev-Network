import React, { useState } from "react";
import Userpic from "../UserPic";
import { useAtom } from "jotai";
import { userAtom } from "../../utils/userStore";
import { trpc } from "@/utils/trpc";

type Props = {
	closeOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const Overlay: React.FC<Props> = ({ closeOverlay }) => {
	const [post, setpost] = useState("");
	// const [userDetails, setUserDetails] = useAtom(userAtom);
	// // const queryClient = useQueryClient();
	// const queryClient = trpc.

	// const addPost = async (newPost: string) => {
	// 	const res = await fetch("/api/posts", {
	// 		method: "POST",
	// 		body: JSON.stringify({ post: newPost }),
	// 	});
	// 	return await res.json();
	// };

	// const mutation = useMutation(addPost, {
	// 	onSuccess: (data) => {
	// 		queryClient.setQueryData(["posts"], data);
	// 		closeOverlay(false);
	// 	},
	// });

	const checkOverlay = (event: any) => {
		if (event.target.classList[0] === "overlay") {
			closeOverlay(false);
		}
	};

	return (
		<div
			onClick={(event) => checkOverlay(event)}
			className="overlay absolute inset-0 z-20 flex items-center justify-center bg-black-rgba"
		>
			<div className="flex h-4/5 w-1/2 flex-col rounded-md bg-blue-50">
				<div className="flex items-center justify-between border-b border-blue-200 py-2 px-8">
					<span className="text-2xl">Create a new post</span>
					<button
						onClick={() => closeOverlay(false)}
						className="m-4 cursor-pointer text-center text-3xl font-bold duration-200 hover:scale-125"
					>
						<span>&times;</span>
					</button>
				</div>
				<div className="flex flex-1 flex-col justify-between  px-8 py-4">
					<div className="mb-4 flex w-1/2 items-center space-x-4  text-center">
						<div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-blue-200">
							<Userpic height={40} width={40} hash={1} />
						</div>
						<div className="text-left">
							<div className="text-xl">Surya Vivek</div>
							<p className="text-sm">@username</p>
						</div>
					</div>

					<form
						onSubmit={(event) => {
							event.preventDefault();
							// mutation.mutate(post.trim());
							setpost("");
						}}
						className="flex h-4/5 w-full flex-col space-y-4 "
					>
						<textarea
							name="post"
							value={post}
							onChange={(e) => setpost(e.target.value)}
							placeholder="What's on your mind?"
							className="h-full w-full flex-1 resize-none rounded-md border border-blue-300 bg-transparent p-4 outline-none focus:border-blue-400"
						/>

						<input
							disabled={post.trim().length === 0}
							type="submit"
							value="Create a new post"
							className="cursor-pointer rounded-md border border-blue-500 py-2 text-blue-500 duration-300 hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:border-red-300 disabled:text-blue-300 disabled:hover:bg-transparent disabled:hover:text-blue-300"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Overlay;
