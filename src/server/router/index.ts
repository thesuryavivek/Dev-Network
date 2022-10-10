import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "@/server/utils/prisma";

export const appRouter = trpc
	.router()
	.query("get-posts", {
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
	})
	.mutation("create-post", {
		input: z.object({
			authorId: z.number(),
			postContent: z.string(),
		}),
		async resolve({ input }) {
			const postInDB = await prisma.post.create({
				data: {
					title: input.postContent,
					authorId: input.authorId,
				},
			});
			return {
				success: true,
				post: postInDB,
			};
		},
	});
