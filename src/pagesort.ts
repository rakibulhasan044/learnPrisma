import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  //offset pagination

  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 3,
  });

  //offset pagination

  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 3,
    cursor: {
      id: 15,
    },
  });

  console.log("offset pagination data: ", offsetData);
};

paginationSorting();
