import { useQuery } from "@tanstack/react-query";

const Feed = () => {
	const { isLoading, data, isError } = useQuery(["todos"], async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/todos");
		const data = await res.json();
		return data;
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error occurred!</span>;
	}

	return (
		<>
			<div>Feed</div>
			<ul>
				{data?.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</>
	);
};

export default Feed;
