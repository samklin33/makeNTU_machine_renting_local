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
    const token = jwt.sign({usetId: result.name}, secretkey, {expiresIn: env.JWT_EXPIRES_IN});
    res.json(token);
}

// app.post('/api/signin', async (req, res) => {
//     const { username, password, permission } = req.body;
//     // const nameTemp = username.toString();
//     // const permissionTemp = password.toString();
//     const hashedPassword = await bcrypt.hash(password, secretkey);
//     const result = await prisma.account.findUnique({
//         where: {
//             name: username,
//             permission: permission,
//         },
//     })
//     const token = jwt.sign({usetId: result.name}, secretkey, {expiresIn: env.JWT_EXPIRES_IN});
//     res.json(token);
// })

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
//     if(!result) {
//         res.status(401).json({error: "Failed to create account"})
//     }
//     const token = jwt.sign({userId: result.name}, secretkey, {expiresIn: env.JWT_EXPIRES_IN});
//     res.status(200).json(token);
// }

export const SignInApi = async (req: NextApiRequest, res: NextApiResponse) => {
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
