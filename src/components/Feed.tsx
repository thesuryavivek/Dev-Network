import { useQuery } from "@tanstack/react-query";

const Feed = () => {
	const { isLoading, data, isError, error } = useQuery<string[], Error>(
		["posts"],
		async () => {
			const res = await fetch("/api/posts");
			const data = await res.json();
			return data;
		}
	);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error occurred! {error?.message}</span>;
	}
	console.log(data);

	return (
		<>
			<div>Feed</div>
			<ul>
				{data?.map((post: any) => (
					<li key={post}>{post}</li>
				))}
			</ul>
		</>
	);
};

export default Feed;
