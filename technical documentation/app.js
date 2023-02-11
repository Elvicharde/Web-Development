// This is a local server running via node.js and express.
// It runs on localhost via port 5000

const express = require("express");    // importing relevant module
const app = express();    // creating an application
const PORT = 5000;

let root_html = __dirname + "/index.html"

app.get("/", (_, res)=>{
    res.sendFile(root_html)
})

app.get("/json",(_, res)=>{
    res.json({
        "status":"200",
        "description":{
            "name": "Oguntuase Victor",
            "app" : "Node Js Project"
        }})
})

app.post("/", (_, res)=>{
    res.json({"status":"200"})
})

app.use("/styles", express.static(__dirname + "/styles"))
app.listen(PORT, x => console.log("Serving Website via PORT: " + PORT))

