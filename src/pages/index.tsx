import type { NextPage } from "next";
import { useState } from "react";
import PostForm from "../components/PostForm";
import { userData } from "../types";

const Home: NextPage = () => {
	const [user, setUser] = useState<userData | null>(null);

	return (
		<div>
			<PostForm user={user} />
			<h1 className="text-3xl font-bold text-slate-500">
				This is the home page of the user that has feed 🐈🐈...
			</h1>
			<button onClick={() => setUser({ id: 1, username: "suryavivek" })}>
				click
			</button>
			{user?.username}
		</div>
	);
};

export default Home;
