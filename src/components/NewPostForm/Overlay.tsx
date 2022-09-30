import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
	closeOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const Overlay: React.FC<Props> = ({ closeOverlay }) => {
	const [post, setpost] = useState("");
	const queryClient = useQueryClient();

	const addPost = async (newPost: string) => {
		const res = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({ post: newPost }),
		});
		return await res.json();
	};

	const mutation = useMutation(addPost, {
		onSuccess: (data) => {
			queryClient.setQueryData(["posts"], data);
		},
	});

	return (
		<div className="absolute inset-0 z-20 flex items-center justify-center bg-white">
			<div className="flex h-4/5 w-3/5 flex-col rounded-md bg-blue-50">
				<button
					onClick={() => closeOverlay(false)}
					className="m-4 ml-auto h-8 w-8 cursor-pointer rounded-full text-center font-bold hover:scale-125 hover:bg-blue-100"
				>
					&times;
				</button>

				<form
					onSubmit={(event) => {
						event.preventDefault();
						mutation.mutate(post);
						setpost("");
					}}
					className="grid place-items-center"
				>
					<textarea
						name="post"
						value={post}
						onChange={(e) => setpost(e.target.value)}
						className="h-12 w-96 border p-2 outline-none"
					/>

					<input
						disabled={post.length === 0}
						type="submit"
						value="post"
						className="my-4 cursor-pointer rounded border px-4 py-2 hover:bg-slate-50"
					/>
				</form>
			</div>
		</div>
	);
};

export default Overlay;
