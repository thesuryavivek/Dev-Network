import React, { useState } from "react";
import Userpic from "./Userpic";
import { userData } from "../types";

type Props = {
	user: userData | null;
};

const PostForm = ({ user }: Props) => {
	const [newPost, setNewPost] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const reqBody = {
			post: newPost,
			user,
		};

		const res = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify(reqBody),
		});
		const data = await res.json();
		console.log(data);
	};

	return (
		<>
			<Userpic user={user} />
			<form onSubmit={handleSubmit} className="grid place-items-center">
				<textarea
					name="post"
					value={newPost}
					onChange={(event) => setNewPost(event.target.value)}
					className="border break-words resize-none outline-none w-96 h-24 p-2"
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
