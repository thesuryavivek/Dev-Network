import React, { useState } from "react";
import Userpic from "./Userpic";
import { userData } from "../types";

type Props = {
	user: userData | null;
};

const PostForm = ({ user }: Props) => {
	const [post, setpost] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const newPost = new FormData(event.currentTarget).get("post");

		const res = await fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({ post: newPost }),
		});
		const data = await res.json();
		console.log(data);

		setpost("");
	};

	return (
		<>
			<Userpic user={user} />
			<form
				onSubmit={(event) => handleSubmit(event)}
				className="grid place-items-center"
			>
				<textarea
					name="post"
					value={post}
					onChange={(e) => setpost(e.target.value)}
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
