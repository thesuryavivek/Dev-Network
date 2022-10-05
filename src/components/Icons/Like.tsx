import { useState } from "react";

const LikeIcon = () => {
	const [isLiked, setIsLiked] = useState<boolean>(false);

	return (
		<span
			onClick={() => setIsLiked(!isLiked)}
			className="cursor-pointer rounded-full p-1 hover:bg-white hover:bg-opacity-50"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill={isLiked ? "red" : "none"}
				viewBox="0 0 24 24"
				strokeWidth={1}
				stroke={isLiked ? "red" : "currentColor"}
				className="h-4 w-4"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
				/>
			</svg>
		</span>
	);
};

export default LikeIcon;
