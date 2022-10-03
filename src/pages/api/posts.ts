import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method === "POST") {
			const body = JSON.parse(req.body);
			await prisma.post.create({
				data: {
					title: body.post,
					authorId: 1,
				},
			});
			console.log(body);
		}
		const posts = await prisma.post.findMany();

		return res.status(200).json(posts);
	} catch (error) {
		console.log(error);
		return res.status(403).json(error);
	}
}
