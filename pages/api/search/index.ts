import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function hadler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(401).json({ message: "Debe de especificar el query de busqueda" });
}
