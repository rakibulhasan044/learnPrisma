// import { PrismaClient } from "./generated/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is Prisma",
  //       author: "hehehe",
  //     },
  //   });

  const alldata = await prisma.post.findMany();

  // console.log(alldata);
};

main();
