import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const alldata = await prisma.post.findMany();

  const findFirst = await prisma.post.findFirst({
    where: {
      published: true,
    },
  });

  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 1,
    },
  });

  console.log({ findUnique });
};

main();
