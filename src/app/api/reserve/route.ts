import prisma from "../../../../prisma/client"
//import express from "express";
// import { PrismaClient } from "@prisma/client";
import { type NextApiRequest, NextApiResponse } from "next";
//const app = express();
//app.use(express.json());
// const prisma = new PrismaClient();


export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log("req.body", req.body);
    const { username, type, title, note } = req.body;
    
    try {
        const user = await prisma.request.create({
            data: {
                group: username,
                type: type,
                filename: title,
                comment: note,
                number: 0,
                status:"pending",
            }
        });
        console.log(user);
        return res.status(200).json(user);
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json(error);
    }
}

export async function GET(req: NextApiRequest, res:NextApiResponse) {
    const resultReq = await prisma.request.findMany();
    return res.status(200).json(resultReq);
}