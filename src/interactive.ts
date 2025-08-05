import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (tr) => {
    //q-1
    const getAll = await tr.post.findMany({
      where: {
        published: true,
      },
    });
    //q-2
    const countUser = await tr.user.count();
    //q-3
    const updateUser = await tr.user.update({
      where: {
        id: 7,
      },
      data: {
        age: 27,
      },
    });
    return {
      getAll,
      countUser,
      updateUser,
    };
  });

  console.log(result);
};

interactiveTransaction();
