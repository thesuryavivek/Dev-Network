import React from "react";
import Sidebar from "./Sidebar/Component";
import Feed from "./Feed/Component";
import NewPostForm from "./NewPostForm/Component";
import Messages from "./Messages/Component";
import Search from "./Search/Component";

const Body = () => {
	return (
		<div className="flex space-x-4 px-20 py-12">
			<section className="w-1/5">
				<Sidebar />
			</section>
			<main className="w-1/2">
				<NewPostForm />
				<Feed />
			</main>
			<section className="sticky top-24 h-[80vh] w-[30%] rounded-md">
				<Search />
				<Messages />
			</section>
		</div>
	);
};

export default Body;
