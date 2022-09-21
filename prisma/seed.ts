import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const load = async (n: number) => {
	try {
		await prisma.user.deleteMany();

		const allUsers = [];

		for (let i = 0; i < n; i++) {
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

			allUsers.push({
				email,
				name: fullName,
			});
		}

		const userCount = await prisma.user.createMany({
			data: allUsers,
		});
		console.log({ userCount });
	} catch (error) {
		console.error(error);
	} finally {
		await prisma.$disconnect();
	}
};

load(50);
