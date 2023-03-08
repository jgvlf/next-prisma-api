import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(){
    const accounts = await prisma.account.findMany();

    return {accounts}

}