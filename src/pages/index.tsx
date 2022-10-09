import type { NextPage } from "next";
import Nav from "@/components/Nav";
import Body from "@/components/Body";

const Home: NextPage = () => {
	return (
		<div className="h-screen w-full">
			<Nav />
			<Body />
		</div>
	);
};

export default Home;
