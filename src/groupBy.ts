import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  const published = await prisma.post.groupBy({
    by: ["authorId"],
    _count: {
      title: true,
    },
    having: {
      authorId: {
        _sum: {
          gt: 2,
        },
      },
    },
  });
  console.log(published);
};

groupBy();
