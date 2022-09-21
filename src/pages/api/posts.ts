// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
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
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});

	res.status(200).json(posts);
}
