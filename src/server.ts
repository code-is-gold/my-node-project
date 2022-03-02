import express, { Application, Request, Response } from "express";

const app: Application = express();
app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "HAPPY CODING" });
});
const port = 3000;
const host = "http://localhost"
app.listen(port, () =>{

    console.log(`\nServer listening on ${host}:${port}\n`);
})
