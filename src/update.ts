import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       content: "Update content",
  //       author: "Rakibul Hasan",
  //     },
  //   });

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "This is Prisma",
    },
    data: {
      published: true,
    },
  });

  //   console.log(singleUpdate);
  console.log(updateMany);
};

updates();
