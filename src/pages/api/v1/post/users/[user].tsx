import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
    ){
    const users = await prisma.user.findUnique({
        where:{
            accountId: req.body.accountId
        }
    });

    return {users}

}