const fs   = require("fs");
require("dotenv").config();

let html = fs.readFileSync("index.html", "utf8");
html = html.replace("__SCRIPT_URL__", process.env.MYURL || "");
fs.writeFileSync("dist/index.html", html);
console.log("Built with MYURL:", process.env.MYURL);
