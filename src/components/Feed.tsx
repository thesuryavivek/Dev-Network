import { useQuery } from "@tanstack/react-query";

const Feed = () => {
	const handleFetch = () => {
		refetch();
	};

	const { isLoading, data, isError, refetch } = useQuery(
		["todos"],
		async () => {
			const res = await fetch("/api/posts");
			const data = await res.json();
			return data;
		},
		{
			enabled: false,
		}
	);

	// if (isLoading) {
	// 	return <span>Loading...</span>;
	// }

	// if (isError) {
	// 	return <span>Error occurred!</span>;
	// }

	return (
		<>
			<div>Feed</div>
			<button onClick={handleFetch}>Fetch some data</button>
			<ul>
				{data?.map((post: any) => (
					<li key={post}>{post}</li>
				))}
			</ul>
		</>
	);
};

export default Feed;
