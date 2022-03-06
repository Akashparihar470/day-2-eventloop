const express = require("express");

const app = express();

app.get("/users",function (req,res){
    res.send("hello");
})

app.get("/books",function (req,res){
    res.send({
       Book1: "1. You Don’t Know JS by Kyle Simpson",
       Book2: "2. Effective JavaScript: 68 specific ways to harness the power of JavaScript by David Herman",
       Book3: "3. A Smarter Way to Learn JavaScript by Mark Myers",
       Book4: "4. Eloquent JavaScript by Marijn Haverbeke",
    });
})

app.listen(5000,() => {
    console.log("listening on port 4000")
})