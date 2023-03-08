import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(){
    const users = await prisma.user.findMany();

    return {users}

}