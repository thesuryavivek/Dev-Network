import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "@/server/utils/prisma";

export const appRouter = trpc.router().query("get-posts", {
	async resolve() {
		const posts = await prisma.post.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				author: true,
			},
		});
		return {
			posts,
		};
	},
});
