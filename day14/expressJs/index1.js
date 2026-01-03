 console.log("first achivement!!!");
const express = require('express');
const constants = require('constants')
const userData = require('./MOCK_DATA.json');
const fsModule = require('fs');
const path = require('path');
const app = express();

const filePath = path.join(__dirname,'MOCK_DATA.json');
function readFileData(){
try
{
    fsModule.access('filePath', constants.F_OK, (ERR)=>{
         const data = fsModule.readFileSync(filePath, 'utf8');
         return JSON.parse(data);
    });
}
catch(ERR)
{
   console.log("error while reading the file");

}
};



app.get('/', (req, res) => {
    res.send("Hello From Express");
});

app.get('/users', (req,res)=>{
    let id = Number(req.params.id);
     console.log(id);
  
    // console.log(res.json(user));
     res.json(userData);
});
app.get('/users/:id', (req,res)=>{
    let id = Number(req.params.id);
     console.log(id);
   const user =  userData.find((user)=>
        user.id===id
    );
    // console.log(res.json(user));
      res.json(user);
});


app.get('/usersByEmail/:email', (req,res)=>{
    console.log("param",req.params);
     let email = req.params.email;
    //  console.log(email);
   const user =  userData.find((user)=>
        user.email===email
    );
    // console.log(res.json(user));
      res.json(user);
});
// app.delete('/usersbyId/:id', (req,res)=>{
//     // console.log("param",req.params);
      
      
//     let  id = Number(req.params.id);
//     console.log(id);
    
//   const  usersD = userData.filter(user => user.id !== id);
//     // console.log(res.json(user));
//      return res.json(usersD);
// });

app.delete('/usersbyId/:id', (req,res)=>{
    // console.log("param",req.params);
      
      
    let  id = Number(req.params?.id);
    console.log(id);
    const userIndex = userData.findIndex(
        user => user?.id === id
    )
    if(userIndex===-1)
    {
        return res.status(404).send('data not found');
    }
    
  // const  usersD = userData.filter(user => user.id !== id);
    // console.log(res.json(user));
    userData.splice(userIndex,1);
    fsModule.writeFileSync('MOCK_DATA.json',JSON.stringify(userData),(err)=>{
        if(err)
        {
            console.log("error: ",err);
        }
        else
        {
            console.log("file written successfully");
        }
    })
     return res.json(userData);
});
app.use(express.json()); 
app.post('/save',(req,res)=>{
    const data = req.body;
    userData.push(data);
     fsModule.writeFileSync('MOCK_DATA.json',JSON.stringify(userData),(err)=>{
        if(err)
        {
            console.log("error: ",err);
        }
        else
        {
            console.log("file written successfully");
        }
    })
    res.json(userData);
});

app.get('/aboutus',(req,res)=>{
    const filePath = path.join(__dirname,"aboutus.html");
    // console.log(filePath);
    res.sendFile(filePath);
})

app.put('/updateUser',(req,res)=>{
    const data = req.body;
    console.log(data.id);
    const userIndex = userData.findIndex(
        user => user?.id === data?.id
    )
    if(userIndex===-1)
    {
        console.log("the user is not found");
    }
    else
    {
        userData[userIndex].first_name=data.first_name;//"renuka"//data.first_name;
         userData[userIndex].email=data.email;
         userData[userIndex].last_name=data.last_name;

         fsModule.writeFileSync('MOCK_DATA.json',JSON.stringify(userData),(err)=>{
        if(err)
        {
            console.log("error: ",err);
        }
        else
        {
            console.log("file written successfully");
            
        }
    })
    res.json(userData);
        
        
    }
    
    
})

app.listen(3000);
console.log("from first test.....");