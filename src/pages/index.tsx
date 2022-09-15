import type { NextPage } from "next";

const Home: NextPage = () => {
	const fetchSomething = async () => {
		const res = await fetch("/api/posts");
		const data = await res.json();
		console.log(data);
	};

	return (
		<h1 className="text-3xl font-bold underline text-red-300">
			Hello world!
		</h1>
	);
};

export default Home;
