import PostComponent from "./Post";
import { trpc } from "@/utils/trpc";

const Feed = () => {
	// const { isLoading, data, isError, error } = useQuery<Post[], Error>(
	// 	["posts"],
	// 	async () => {
	// 		const postsRes = await fetch("/api/posts");
	// 		const postsData = await postsRes.json();
	// 		return postsData;
	// 	}
	// );

	const { data, isLoading, isError, error } = trpc.useQuery(["get-posts"]);

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error occurred! {error?.message}</span>;
	}

	return (
		<div className="space-y-4 py-4">
			{data?.posts.map((post) => (
				<PostComponent
					key={post.id}
					authorId={post.authorId}
					title={post.title}
					author={post.author}
				/>
			))}
		</div>
	);
};

export default Feed;
