import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//Imports from react and next js
import type { NextPage } from "next";
import { useState } from "react";

//Components and types
import PostForm from "../components/PostForm";
import Feed from "../components/Feed";
import { userData } from "../types";
import useUserStore from "../utils/stores/userStore";

const Home: NextPage = () => {
	// const [user, setUser] = useState<userData | null>(null);

	const queryClient = new QueryClient();

	const userId = useUserStore((state: any) => state.userId);
	const username = useUserStore((state: any) => state.username);
	const loginUser = useUserStore((state: any) => state.loginUser);
	const logoutUser = useUserStore((state: any) => state.logoutUser);
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<PostForm />
				<h1 className="text-3xl font-bold text-slate-500">
					This is the home page {userId}, {username}
				</h1>
				<button
					onClick={() => loginUser(12, "surya")}
					className="px-4 py-2 m-4 rounded border hover:bg-slate-100"
				>
					login
				</button>
				<button
					onClick={logoutUser}
					className="px-4 py-2 m-4 rounded border hover:bg-slate-100"
				>
					logout
				</button>

				<Feed />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};

export default Home;
