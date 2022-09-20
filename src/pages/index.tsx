import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//Imports from react and next js
import type { NextPage } from "next";
import { useState } from "react";

//Components and types
import PostForm from "../components/PostForm";
import Feed from "../components/Feed";
import { userData } from "../types";

const Home: NextPage = () => {
	const [user, setUser] = useState<userData | null>(null);

	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<PostForm user={user} />
				<h1 className="text-3xl font-bold text-slate-500">
					This is the home page of the user that has feed 🐈🐈...
				</h1>
				<Feed />
				<button
					onClick={() => setUser({ id: 1, username: "suryavivek" })}
					className="px-4 py-2 m-4 rounded border hover:bg-slate-100"
				>
					click
				</button>
				{user?.username}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};

export default Home;
