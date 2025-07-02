import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 1500;

const __filename = fileURLToPath(import.meta.url); // Note: import.meta.url gives you the url of the current file then convert it to a path hence FileURLtoPath
const __dirname = dirname(__filename);// Note: This just extracts the directory portion of a file path.

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "Views", "login.html"));
});

app.listen(port, () => {
    console.log(`Listenint to port ${port}`);
});