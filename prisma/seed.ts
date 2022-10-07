import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const load = async (numberOfUsers: number) => {
	try {
		await prisma.user.deleteMany();
		await prisma.post.deleteMany();

		const generateRandomPosts = () => {
			const randomNumber = Math.floor(Math.random() * 5);
			const randomPosts = [];
			for (let i = 0; i < randomNumber; i++) {
				randomPosts.push({
					title: faker.lorem.sentences(2),
				});
			}
			return randomPosts;
		};

		for (let i = 0; i < numberOfUsers; i++) {
			const firstName = faker.name.firstName();
			const lastName = faker.name.lastName();
			const email = faker.internet.email(
				firstName,
				lastName,
				"gmail.com",
				{
					allowSpecialCharacters: false,
				}
			);
			const fullName = `${firstName} ${lastName}`;
			const username = faker.internet.userName(firstName, lastName);

			await prisma.user.create({
				data: {
					name: fullName,
					email,
					username,
					posts: {
						// create: generateRandomPosts(),
						createMany: {
							data: generateRandomPosts(),
						},
					},
				},
			});
		}

		console.log("DB seeded...");
	} catch (error) {
		console.error(error);
	} finally {
		await prisma.$disconnect();
	}
};

load(100);
