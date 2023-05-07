import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/emails";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body);
  await sendEmail({
    to: "sslavishaa@gmail.com",
    subject: "Welcome to NextAPI",
    html: `
        <h1>Ovo je poruka sa SMWEB sajta</h1>
        <h4>${data.email}</h4>
        <h5>${data.name}</h5>
        <h5>${data.message}</h5>
    `,
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
