import prisma from "../../../../prisma/client"
// import { PrismaClient } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

// const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    console.log("req.body", req.body);
    const { username, type, title, note } = req.body;
    
    try {
        const user = await prisma.user.create({
            data: {
                group: username,
                type: type,
                filename: title,
                comment: note,
            }
        });
        console.log(user);
        return NextResponse.json({ message: "User created" }, { status: 200 });
    } catch (error) {
        console.log("error: ", error);
        return NextResponse.json({ error }, { status: 500 });
    }
}

export function GET(req: NextRequest) {
    return NextResponse.json(
        {
            message: "Hello from GET /api/users"
        },
        { status: 200 }, 
        );
}