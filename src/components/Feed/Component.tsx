import type { Post } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import PostComponent from "./Post";

const Feed = () => {
	const { isLoading, data, isError, error } = useQuery<Post[], Error>(
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
			{data?.map((post: Post) => (
				<PostComponent
					key={post.id}
					authorId={post.authorId}
					title={post.title}
				/>
			))}
		</div>
	);
};

export default Feed;
