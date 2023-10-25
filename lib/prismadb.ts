import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
};
// if we remove above then below line will give us error. That's why we used the above line.

const prismadb = globalThis.prisma || new PrismaClient();


// here we use if condition whether to choose globalThis.prisma or new PrismaClient.
if(process.env.NODE_ENV !== "production") globalThis.prisma =prismadb;

export default prismadb;
