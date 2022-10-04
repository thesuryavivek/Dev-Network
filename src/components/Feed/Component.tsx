import { useQuery } from "@tanstack/react-query";
import Post from "./Post";

const Feed = () => {
	const { isLoading, data, isError, error } = useQuery<string[], Error>(
		["posts"],
		async () => {
			const postsRes = await fetch("/api/posts");
			const postsData = await postsRes.json();
			return postsData;
		}
	);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error occurred! {error?.message}</span>;
	}

	return (
		<div className="space-y-4 py-4">
			{data?.map((post: any) => (
				<Post key={post.id} title={post.title} />
			))}
		</div>
	);
};

export default Feed;
