import { NextApiRequest, NextApiResponse } from "next";
import { SAMPLE_USER_DATA } from "models/user";

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  try {
    if (!Array.isArray(SAMPLE_USER_DATA)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(SAMPLE_USER_DATA);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
