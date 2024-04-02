import fs from "fs";
import path from "path";

function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }
    const NewComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    const eventFilePath = path.join(process.cwd(), "data", `${eventId}.json`);

    let data = [];
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      if (fs.existsSync(eventFilePath)) {
        const fileData = fs.readFileSync(eventFilePath);
        data = JSON.parse(fileData);
      }

      data.push(NewComment);
      fs.writeFileSync(eventFilePath, JSON.stringify(data));

      res.status(201).json({ message: "success!", comment: NewComment });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    const eventFilePath = path.join(process.cwd(), "data", `${eventId}.json`);
    try {
      if (fs.existsSync(eventFilePath)) {
        const fileData = fs.readFileSync(eventFilePath);
        const comments = JSON.parse(fileData);
        res.status(200).json({ comments });
      } else {
        res.status(404).json({ message: "No comments found for the event." });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default handler;
