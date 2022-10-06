import type { NextPage } from "next";
import Nav from "../components/Nav";
import Body from "../components/Body";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	const queryClient = new QueryClient();
	const hello = trpc.useQuery(["hello", { text: "client" }]);

	return (
		<QueryClientProvider client={queryClient}>
			<div className="h-screen w-screen overflow-x-hidden">
				{/* <Nav /> */}
				{/* <Body /> */}
				{hello.data?.greeting}
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default Home;
