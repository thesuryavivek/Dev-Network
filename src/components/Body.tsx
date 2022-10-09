import React from "react";
import Sidebar from "./Sidebar/Component";
import Feed from "./Feed/Component";
import NewPostForm from "./NewPostForm/Component";
import Messages from "./Messages/Component";
import Search from "./Search/Component";

const Body = () => {
	return (
		<div className="flex w-full space-x-4 px-20 py-12">
			<aside className="w-1/5">
				<Sidebar />
			</aside>
			<main className="w-1/2">
				<NewPostForm />
				<Feed />
			</main>
			<section className="sticky top-10 h-[80vh] w-[30%] rounded-md">
				<Search />
				<Messages />
			</section>
		</div>
	);
};

export default Body;
