import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "this",
          },
        },
      ],
    },
  });

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "u",
      },
    },
  });

  const userName = ["user1", "user3", "user2"];

  const userNameArray = await prisma.user.findMany({
    where: {
      userName: {
        in: userName,
      },
    },
  });
  console.log(userNameArray);
};

filtering();
