import React, { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import Userpic from "./Userpic";
import Overlay from "./Overlay";

const PostForm = () => {
	// const [post, setpost] = useState("");
	const [isOverlay, setIsOverlay] = useState<boolean>(false);
	// const queryClient = useQueryClient();

	// const addPost = async (newPost: FormDataEntryValue | null) => {
	// 	const res = await fetch("/api/posts", {
	// 		method: "POST",
	// 		body: JSON.stringify({ post: newPost }),
	// 	});
	// 	return await res.json();
	// };

	// const mutation = useMutation(addPost, {
	// 	onSuccess: (data) => {
	// 		queryClient.setQueryData(["posts"], data);
	// 	},
	// });

	return (
		<div className="flex items-center justify-evenly rounded-md bg-blue-100 px-4 py-8">
			<Userpic />
			<div className="h-full w-4/5">
				<input
					type="text"
					onFocus={() => setIsOverlay(true)}
					className="w-full rounded-full border-none bg-blue-50 p-4 px-8 text-lg outline-none"
				/>
			</div>
			{isOverlay && <Overlay closeOverlay={setIsOverlay} />}
			{/* <form
				onSubmit={(event) => {
					event.preventDefault();
					mutation.mutate(
						new FormData(event.currentTarget).get("post")
					);
					setpost("");
				}}
				className="grid place-items-center"
			>
				<input
					autoComplete="off"
					name="post"
					value={post}
					onChange={(e) => setpost(e.target.value)}
					className="h-12 w-96 border p-2 outline-none"
				/>

				<input
					type="submit"
					value="post"
					className="my-4 cursor-pointer rounded border px-4 py-2 hover:bg-slate-50"
				/>
			</form> */}
		</div>
	);
};

export default PostForm;
