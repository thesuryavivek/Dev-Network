import React, { useState } from "react";
import Userpic from "../UserPic";
import { useAtom } from "jotai";
import { userAtom } from "../../utils/store";
import { trpc } from "@/utils/trpc";

type Props = {
	closeOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

const Overlay: React.FC<Props> = ({ closeOverlay }) => {
	const [post, setpost] = useState("");
	const [userDetails] = useAtom(userAtom);
	const utils = trpc.useContext();

	const { mutate, isLoading } = trpc.useMutation(["create-post"], {
		onSuccess() {
			closeOverlay(false);
			utils.invalidateQueries(["get-posts"]);
		},
	});

	const checkOverlay = (event: any) => {
		if (event.target.classList[0] === "overlay") {
			closeOverlay(false);
		}
	};

	return (
		<div
			onClick={(event) => checkOverlay(event)}
			className="overlay absolute inset-0 z-20 flex items-center justify-center bg-black-rgba"
		>
			<div className="flex h-4/5 w-1/2 flex-col rounded-md bg-blue-50">
				<div className="flex items-center justify-between border-b border-blue-200 py-2 px-8">
					<span className="text-2xl">Create a new post</span>
					<button
						onClick={() => closeOverlay(false)}
						className="m-4 cursor-pointer text-center text-3xl font-bold duration-200 hover:scale-125"
					>
						<span>&times;</span>
					</button>
				</div>
				<div className="flex flex-1 flex-col justify-between  px-8 py-4">
					<div className="mb-4 flex w-1/2 items-center space-x-4  text-center">
						<div className="flex -hidden h-16 w-16 items-center justify-center rounded-full bg-blue-200">
							<Userpic
								height={40}
								width={40}
								hash={userDetails.userId}
							/>
						</div>
						<div className="text-left">
							<div className="text-xl">{userDetails.name}</div>
							<p className="text-sm">@{userDetails.username}</p>
						</div>
					</div>

					<form
						onSubmit={(event) => {
							event.preventDefault();
							mutate({
								authorId: userDetails.userId,
								postContent: post.trim(),
							});
							setpost("");
						}}
						className="flex h-4/5 w-full flex-col space-y-4 "
					>
						<textarea
							name="post"
							autoFocus
							value={post}
							onChange={(e) => setpost(e.target.value)}
							placeholder="What's on your mind?"
							className="h-full w-full flex-1 resize-none rounded-md border border-blue-300 bg-transparent p-4 outline-none focus:border-blue-400"
						/>

						<button
							disabled={post.trim().length === 0}
							type="submit"
							className="flex cursor-pointer items-center justify-center rounded-md border border-blue-500 py-2 text-blue-500 duration-300 hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:border-red-300 disabled:text-blue-300 disabled:hover:bg-transparent disabled:hover:text-blue-300"
						>
							{isLoading && (
								<span>
									<svg
										className="-ml-1 mr-3 h-5 w-5 animate-spin text-blue-500"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								</span>
							)}
							<span>Create a new post</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Overlay;
