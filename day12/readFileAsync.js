const constants = require('constants');
const fs = require('fs');


fs.writeFile('sample.txt',"hello!!! you are in",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("file written successfully!!!");
    }
})

try {
  fs.access('sample.txt', constants.F_OK, (ERR) => {
    console.log(ERR)
  })

  const data = fs.readFileAsync('sample.txt', 'utf8');


  for (let a = 1; a < 11; a++) {
    console.log(a);
  }
  console.log('File content:', data);
} catch (err) 
{
  console.error('Error reading file:', err);
}
