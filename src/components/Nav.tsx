import Link from "next/link";
import { tabAtom } from "@/utils/store";
import { useAtom } from "jotai";

//Icons
import Home from "./Icons/Home";
import Messages from "./Icons/Messages";
import Notification from "./Icons/Notification";
import Profile from "./Icons/Profile";
import Settings from "./Icons/Settings";

const Nav = () => {
	const [tab, setTab] = useAtom(tabAtom);

	return (
		<header className="z-10 flex w-full items-center justify-between border-b border-blue-300 bg-blue-100 py-4 px-20">
			<nav>
				<Link href={"/"}>
					<a>
						<h1 className="cursor-pointer text-3xl font-bold text-blue-900 text-opacity-80 hover:text-opacity-70">
							<code>{"< Dev Network />"}</code>
						</h1>
					</a>
				</Link>
			</nav>
			<div>
				<ul className="flex space-x-8">
					<li
						onClick={() => setTab("home")}
						className={`relative after:absolute after:-bottom-6 after:h-px after:w-full after:bg-blue-900 after:content-[''] ${
							tab === "home"
								? "after:opacity-100"
								: "after:opacity-0"
						}`}
					>
						<Link href={"/"}>
							<a>
								<Home />
							</a>
						</Link>
					</li>
					<li
						onClick={() => setTab("notifications")}
						className={`relative after:absolute after:-bottom-6 after:h-px after:w-full after:bg-blue-900 after:content-[''] ${
							tab === "notifications"
								? "after:opacity-100"
								: "after:opacity-0"
						}`}
					>
						<Link href={"/notifications"}>
							<a>
								<Notification />
							</a>
						</Link>
					</li>
					<li
						onClick={() => setTab("messages")}
						className={`relative after:absolute after:-bottom-6 after:h-px after:w-full after:bg-blue-900 after:content-[''] ${
							tab === "messages"
								? "after:opacity-100"
								: "after:opacity-0"
						}`}
					>
						<Link href={"/messages"}>
							<a>
								<Messages />
							</a>
						</Link>
					</li>
					<li
						onClick={() => setTab("settings")}
						className={`relative after:absolute after:-bottom-6 after:h-px after:w-full after:bg-blue-900 after:content-[''] ${
							tab === "settings"
								? "after:opacity-100"
								: "after:opacity-0"
						} `}
					>
						<Link href={"/settings"}>
							<a>
								<Settings />
							</a>
						</Link>
					</li>
					<li
						onClick={() => setTab("profile")}
						className={`relative after:absolute after:-bottom-6 after:h-px after:w-full after:bg-blue-900 after:content-[''] ${
							tab === "profile"
								? "after:opacity-100"
								: "after:opacity-0"
						}`}
					>
						<Profile />
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Nav;
