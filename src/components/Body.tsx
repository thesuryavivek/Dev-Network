import React from "react";
import Sidebar from "./Sidebar/Component";
import Feed from "./Feed/Component";
import NewPostForm from "./NewPostForm/Component";

const Body = () => {
	return (
		<div className="space-x-4 flex px-20 py-12">
			<div>
				<Sidebar />
			</div>
			<main className="bg-blue-100 rounded-md">
				<NewPostForm />
				<Feed />
			</main>
		</div>
	);
};

export default Body;
