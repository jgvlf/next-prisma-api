import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const prisma = new PrismaClient();

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
    ){
    const createUserSchema = z.object({
        name: z.string(),
        gender: z.string(),
        age: z.number(),
        accountId: z.string(),
    })

    const {name, gender, age, accountId} = createUserSchema.parse(req.body)
    const accounts = await prisma.user.create({
        data:{
            name,
            gender,
            age,
            accountId
        }
    });

    return res.status(201)

}