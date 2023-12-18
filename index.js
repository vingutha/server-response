import express from "express"
const app = express();
const port = 3000;

app.get ("/", (req, res) =>{
    res.send("<h1>Home page!</h1>");
});

app.get("/about", (req, res) =>{
    res.send("<h1>About me:</h1> <p>Hi! I am Vinuthna. I love to cook, sing and dance on pop music. Waiting for 2025, fighting!</p>");
})
app.get("/contact", (req, res) =>{
    res.send("<h1>Contact me:</h1> <p>123456789</p>");
})
app.listen( port, () =>{
    console.log(`server is running at ${port}`);
});