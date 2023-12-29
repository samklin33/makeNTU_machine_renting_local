import { PrismaClient } from "@prisma/client";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { env } from "../../../utils/env";
import { type NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const app = express();
const secretkey = env.PASSWORD_SECRET;

app.use(express.json());

interface SignInRequest {
    username: string;
    password: string;
}

app.post('/api/signup', async (req, res) => {
    const { username, password, permission } = req.body;
    const hashedPassword = await bcrypt.hash(password, secretkey);
    const result = await prisma.account.create({
        data: {
            name: username,
            password: hashedPassword,
            permission,
        }
    })
    const token = jwt.sign({usetId: result.name}, secretkey, {expiresIn: env.JWT_EXPIRES_IN});
    res.json(token);
})

app.post('/api/signin', async (req, res) => {
    const { username, password, permission } = req.body;
    // const nameTemp = username.toString();
    // const permissionTemp = password.toString();
    const hashedPassword = await bcrypt.hash(password, secretkey);
    const result = await prisma.account.findUnique({
        where: {
            name: username,
            permission: permission,
        },
    })
    const token = jwt.sign({usetId: result.name}, secretkey, {expiresIn: env.JWT_EXPIRES_IN});
    res.json(token);
})

// export async function POST(req: NextRequest) {
//     console.log("req.body", req.body);
//     const { account, password, permission } = req.body;
//     console.log(account, password, permission);
//     try {
//         const user = await prisma.user.create({
//             data: {
//                 account: account,
//                 password: password,
//                 permission: permission, 
//             }
//         });
//         console.log(user);
//         return NextResponse.json({ message: "User created" }, { status: 200 });
//     } catch (error) {
//         console.log("error: ", error);
//         return NextResponse.json({ error }, { status: 500 });
//     }
// }

// export function GET(req: NextRequest) {
//     return NextResponse.json(
//         {
//             message: "Hello from GET /api/users"
//         },
//         { status: 200 }, 
//         );
// }