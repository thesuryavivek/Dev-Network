export default async function handler(req: any, res: any) {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/todos/1"
	);
	const data = response.json();
	res.status(200).json(data);
}
