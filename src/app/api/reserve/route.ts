import prisma from "../../../../prisma/client"
import { type NextApiRequest, NextApiResponse } from "next";

export async function CreateReserve(req: NextApiRequest, res: NextApiResponse) {
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

export async function GetReserve (req: NextApiRequest, res:NextApiResponse) {
    const resultReq = await prisma.request.findMany();
    return res.status(200).json(resultReq);
}

export const UpdateStatus = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id, username, type, title, note, number, status} = req.body;
    try{
      const result = await prisma.request.update({
        where: {
          id: id,
        },
        data:{
          group: username,
          type: type,
          filename: title,
          comment: note,
          number: 0,
          status: status,
        }
      })
      return res.status(200).json({ data: result});
    } catch (error) {
      return res.status(400).json({ error: "unable to update status"});
    }
  }