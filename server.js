// creating server
console.log("Hello  World");

console.log("hello world");

// creating server

const express = require("express");  //import

const server = express();   //create 

const middleware1 = (req, res, next)=>{
    console.log("This is a middleware1");
    next()  //block the flow and take it back to the requested route
    }

    server.use(middleware1)
const middleware2 =(req, res, next)=>{
    console.log("This is a middleware2");
    // next()
}

server.get("/", (req, res)=>{
    res.send ("Hello World")
    // res.send("<h1>Hello World</h1>")
})

server.get("/user",middleware2, (req, res)=>{
    res.send ("Hello user")
})

server.get("/obj", (req, res)=>{
    res.send ({name:"lalsa", id:44})
})

server.listen(3001,()=>{
    console.log("server is running at port 3001");
})


//  HTTP  METHODS
//  CRUD : create read update delete
//         get post update/put delete 

//MIDDDLEWARE: 
//is a function 
//this fun. takes 3 parameters : req, res, next
// we can create multiple middleware

// why need middleware
// middleware is function which will be 

