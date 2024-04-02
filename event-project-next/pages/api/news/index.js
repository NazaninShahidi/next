import fs from "fs";
import path from "path";
import { useId } from "react";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    // if (!email || email.includes("@")) {
    //   res.status(422).json({ message: "Invalid email address." });
    //   return;
    // }
    const newData = {
      email,
    };

    const filePath = path.join(process.cwd(), "data", "news.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newData);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success!", new: newData });
  }
}

export default handler;
