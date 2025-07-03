import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const app = express();
const port = 1500;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "Views")));

//Set up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

// GET root route
app.get("/", (req, res) => {
  res.redirect("login"); 
});

// GET login route
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "Views", "login.html"));
});

app.get("/home", (req, res) => {
  res.render("main");
});

// POST login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  if (email === "admin@gmail.com" && password === "1234") {
    res.redirect("/home"); 
  } else {
    res.send("Wrong username or password");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});