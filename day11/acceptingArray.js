function evenSum(arr)
{
    let sum = 0;
   for(let i=0;i<10;i++)
   {
    if(arr[i]%2==0)
    { 
       sum = sum+arr[i];
    }
   }
  
   return sum;
}
function evenIndexSum(arr)
{
    let sum = 0;
   for(let i=0;i<10;i++)
   {
    if(i%2==0)
    {
       sum = sum+arr[i];
    }
   }
   return sum;
}
function primeSum(arr)
{
    let sum = 0;
   for(let i=0;i<10;i++)
   {
    let j;
      for(j=2;j<=Math.floor(arr[i]/2);j++)
      {
        if(arr[i]%j==0)
        {
          break;
        }
      }
      if(j==Math.floor(arr[i]/2)+1)
      {
        sum = sum+arr[i];
      }
   }
    return sum;
}
let arr = [];
for(let i=2;i<12;i++)
{
    let  num = process.argv[i];
    let n1 = parseInt(num);
    arr.push(n1);
     
}
console.log(arr);

console.log(evenSum(arr));
console.log(evenIndexSum(arr));
console.log(primeSum(arr));
