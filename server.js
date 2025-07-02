import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 1500;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Views", "login.html"));
});

app.listen(port, () => {
    console.log(`Listenint to port ${port}`);
});