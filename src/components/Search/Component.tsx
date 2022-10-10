import React, { useRef, useState } from "react";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState<string>();
	const inputRef = useRef(null);

	return (
		<div className="mb-4 flex items-center rounded-md bg-blue-100 focus-within:bg-blue-50 focus-within:outline focus-within:outline-1 focus-within:outline-blue-900">
			<div className="ml-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1}
					stroke="currentColor"
					className="h-6 w-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</div>
			<input
				type="text"
				ref={inputRef}
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className="w-full flex-1 border-none bg-blue-100 p-4 text-lg outline-none focus:bg-blue-50"
			/>
			{/* {searchTerm} */}
		</div>
	);
};

export default Search;
