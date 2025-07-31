import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     userName: "user4",
  //     email: "user4@gmail.com",
  //     age: 32,
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio...",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Codding",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "this is title 22",
      content: "this is content 22",
      authorId: 1,
      postCategory: {
        create: [
          // {
          //   categoryId: 1,
          // },
          // {
          //   categoryId: 2,
          // },
          {
            categoryId: 3,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log({ createPost });
};

main();
