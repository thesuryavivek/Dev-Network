import React from "react";

const Nav = () => {
	return (
		<header className=" z-10 flex w-full items-center justify-between border-b border-blue-300 bg-blue-100 py-4 px-20">
			<nav>
				<h1 className="cursor-pointer text-3xl font-bold text-blue-900 text-opacity-80 hover:text-opacity-70">
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
