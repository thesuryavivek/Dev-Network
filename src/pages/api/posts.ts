// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/prisma";

const ALL_POSTS: string[] = ["1st post"];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const body = JSON.parse(req.body);
		ALL_POSTS.push(body.post);
	}

	res.status(200).json(ALL_POSTS);
}
