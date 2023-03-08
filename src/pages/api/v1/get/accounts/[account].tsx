import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
    ){
    const accounts = await prisma.account.findUnique({
        where:{
            email: req.body.email
        }
    });

    return {accounts}

}