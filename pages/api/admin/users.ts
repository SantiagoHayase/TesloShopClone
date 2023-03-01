import { isValidObjectId } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { IUser } from "../../../interfaces";
import { User } from "../../../models";

type Data =
  | {
      message: string;
    }
  | IUser[];

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getUsers(req, res);
    case "PUT":
      return updatedUser(req, res);
    default:
      res.status(200).json({ message: "Example" });
  }
}
const getUsers = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const users = await User.find().select("-password").lean();

  await db.disconnect();
  return res.status(200).json(users);
};

const updatedUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { userId = "", role = "" } = req.body;
  console.log(!isValidObjectId(userId));
  if (!isValidObjectId(userId)) {
    return res.status(400).json({ message: `No existe usuario por ese id` });
  }

  const validRoles = ["admin", "super-user", "SEO", "client"];

  if (!validRoles.includes(role)) {
    return res
      .status(400)
      .json({ message: "Rol no permitido: " + validRoles.join(", ") });
  }

  await db.connect();

  const user = await User.findById(userId);

  if (!user) {
    return res
      .status(404)
      .json({ message: "Usuario no encontrado: " + userId });
  }

  user.role = role;

  await user.save();

  await db.disconnect();
  return res.status(201).json({ message: "Usuario actualizado" });
};
