import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { env } from "../../../utils/env";
import { type NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
const secretkey = env.PASSWORD_SECRET;

export const isAccountUnique = async (req: NextApiRequest, res: NextApiResponse) =>{
    const { username } = req.body;
    const result = await prisma.account.findMany({
        where: { name: { equals: username } }
    })
    if(result.length > 0) res.status(401).json({error: "User already exists"});
    else res.status(200).json({success: "Unique account"});
}

export const SignUpApi = async (req: NextApiRequest, res: NextApiResponse) => {
    const { username, password, permission } = req.body;
    const hashedPassword = await bcrypt.hash(password, secretkey);
    const result = await prisma.account.create({
        data: {
            name: username,
            password: hashedPassword,
            permission,
        }
    })
    if(!result) {
        res.status(401).json({error: "Failed to create account"})
    }
    const token = jwt.sign({userId: result.name}, secretkey, {expiresIn: env.JWT_EXPIRES_IN});
    res.status(200).json(token);
}

export const SignInApi = async (req: NextApiRequest) => {
    const { username, password, permission } = req.body;
    const result = await prisma.account.findFirst({
            where: {
                AND: [
                {permission: {equals: permission}},
                {name: {equals: username}}
                ]
            }
        })
    if(!result) res.status(404).json({error: "User not found"});
    else {
        const isPasswordValid = await bcrypt.compare(password, result.password);
        if(!isPasswordValid) {
            res.status(401).json({error: "False password"});
        } else {
            const token = jwt.sign({userId: username}, secretkey, {expiresIn: env.JWT_EXPIRES_IN})
            res.status(200).json({
                user:{
                    id: result.id,
                    username: result.name,
                    permission: result.permission
                },
                token: token
            })
        }
    }

}