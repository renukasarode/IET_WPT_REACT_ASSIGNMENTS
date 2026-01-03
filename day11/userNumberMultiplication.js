// function multiplication()
// {
//   return n1*n2;
// }
let n1 = process.argv[2];
let n2 = process.argv[3];

// console.log(multiplication(n1,n2));
const p = new Promise((resolve,reject)=>{
  if(n1>0 && n2>0)
  {
    resolve(n1*n2);
  }
  else
  {
    reject("numbers are not positive");
  }
});
p.then((result)=>
{
   console.log("multiplication of bothe numbers is ",result);
}).catch((error)=>
{
  console.log(error);
})

