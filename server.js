import express from "express";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 1500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, "Views")));

// POST login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") {
    res.redirect("/main.html"); // <-- must match filename in Views/
  } else {
    res.send("Wrong username or password");
  }
});

app.get("/", (req, res) => {
    res.redirect("login.html");
})
// Start server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
