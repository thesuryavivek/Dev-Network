// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const ALL_POSTS = ["some post 1", "some post 2"];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		res.status(200).json(ALL_POSTS);
	}

	if (req.method === "POST") {
		const body = JSON.parse(req.body);
		ALL_POSTS.push(body.post);
		res.status(200).json({ name: "submitted", post: body.post });
	}
	console.log("end");
}
