import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const prisma = new PrismaClient();

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
    ){
    const createAccountSchema = z.object({
        email: z.string().email(),
        nickname: z.string(),
    })

    const {email, nickname} = createAccountSchema.parse(req.body)
    await prisma.account.create({
        data:{
            email,
            nickname
        }
    });

    return res.status(201)

}