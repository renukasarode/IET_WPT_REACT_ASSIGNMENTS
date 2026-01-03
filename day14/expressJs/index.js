import express from 'express';
// const express = require('express');
const app = express();

const port = 3030;

app.set('views','./views');
app.set('view engine','hbs');

app.use((req,res,next)=>{
    console.log("Time: ",Date.now());
    // req.set('data',"from use");
    req.data = "from use";
    next();
})
 
app.get('/about',(req,res)=>{
    
    // const data = req.body.data;
    // const data = false;
    //  res.json(userData);
    if(req.body?.data)
    {

    }
    else
    {
       res.render('aboutus');
    }
});

app.get('/calc',(req,res)=>{
   res.render('calc')
});

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({extended:true}));

app.post('/docalculation',(req,res)=>{
    let n1 = parseInt(req.body.num1);
    let n2 = parseInt(req.body.num2);

    res.render('calc',{result:n1+n2})
})

app.get("/maths", (req, res) => {
    res.render("mathstable")
})

app.post("/generate-table", (req, res) => {
    let n1 = req.body.num1
    let arr = []
    for (var i = 0; i <= 10; i++) {
        arr[i] = `${n1}*${i}=${n1 * i}`
    }
    res.render("mathstable", { rowdata: arr })
})
app.listen(port);
console.log("from inner index");