import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Userpic from "./Userpic";

const PostForm = () => {
	const [post, setpost] = useState("");
	const queryClient = useQueryClient();

	const addPost = async (newPost: FormDataEntryValue | null) => {
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
		<>
			<Userpic />
			<form
				onSubmit={(event) => {
					event.preventDefault();
					mutation.mutate(
						new FormData(event.currentTarget).get("post")
					);
					setpost("");
				}}
				className="grid place-items-center"
			>
				<textarea
					name="post"
					value={post}
					onChange={(e) => setpost(e.target.value)}
					className='border resize-none overflow-hidden outline-none h-12 w-96 p-2 after:content-[attr(data-replicated-value)" "] after:whitespace-pre-wrap after:invisible after:border after:p-2'
				/>

				<input
					type="submit"
					value="post"
					className="px-4 py-2 rounded border cursor-pointer my-4 hover:bg-slate-50"
				/>
			</form>
		</>
	);
};

export default PostForm;
