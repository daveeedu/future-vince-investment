import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT || 9000

app.use(express.static(path.join(__dirname, "../dist")))

app.get("/ping", (req, res)=> res.send("Pong!"))

app.get("/*", (req, res) => {
 const file = path.join(__dirname, "../dist", "index.html");

 res.sendFile(file)
})

app.listen(port, _=> console.log("Server started on port", port))