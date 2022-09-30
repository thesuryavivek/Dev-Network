import React from "react";

const Nav = () => {
	return (
		<header className="w-screen bg-blue-100 flex items-center justify-between py-4 px-20 sticky top-0 z-10">
			<nav>
				<h1 className="text-3xl font-bold text-blue-900 text-opacity-80 hover:text-opacity-70 cursor-pointer">
					<code>{"< Dev Network />"}</code>
				</h1>
			</nav>
			{/* 
				icons
					Home
					Notifications
					Messages
					Profile
					Settings
					.
					.
					.
					New post --> Pop out color, onClick --> modal for new post
			*/}
			<div className="cursor-pointer">username</div>
		</header>
	);
};

export default Nav;
