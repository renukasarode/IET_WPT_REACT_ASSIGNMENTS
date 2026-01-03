let add=0;
function calculate(...m)
{
    m.forEach((ele)=>{
    add+=ele;
    })
return add;
}
let result = calculate(1,2,3,4,5,6);
console.log("addition is "+result);

function displayOdd(...arr)
{
   let result =arr.filter((ele)=>{
   return  ele%2!=0
   });
   console.log(result);
}
displayOdd(1,2,3,4,5,6);