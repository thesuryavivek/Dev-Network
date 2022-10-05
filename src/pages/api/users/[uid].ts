import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { uid } = req.query;
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: Number(uid),
			},
		});
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
}
