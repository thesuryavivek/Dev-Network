import { useQuery } from "@tanstack/react-query";
import Post from "./Post";

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

	return (
		<div className="py-12">
			{data?.map((post: any) => (
				<Post key={post.id} title={post.title} />
			))}
		</div>
	);
};

export default Feed;
