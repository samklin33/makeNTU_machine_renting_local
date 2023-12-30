import prisma from "../../../../prisma/client"
import { type NextApiRequest, NextApiResponse } from "next";

//POST
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log("req.body is ", req.body);
    const { group, type, filename, comment } = req.body;
    console.log(group, type, filename, comment);
    try {
        const user = await prisma.request.create({
            data: {
                group: group,
                type: type,
                filename: filename,
                comment: comment,
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

//GET
export async function GET (req: NextApiRequest, res:NextApiResponse) {
    const resultReq = await prisma.request.findMany();
    return res.status(200).json(resultReq);
}

//POST
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