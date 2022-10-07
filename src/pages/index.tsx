import type { NextPage } from "next";
import Nav from "@/components/Nav";
import Body from "@/components/Body";
// import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
	// const hello = trpc.useQuery(["get", { text: "surya" }]);

	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Nav />
			<Body />
			{/* {hello.data?.greeting} */}
		</div>
	);
};

export default Home;
