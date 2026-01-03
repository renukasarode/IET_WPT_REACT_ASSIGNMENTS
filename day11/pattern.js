function pattern(num)
{
   if(num>=1  && num<=5)
   {
    for(let i=0;i<num;i++)
    {
       for(let j=i;j>=0;j--)
       {
         process.stdout.write("*"+" ");
       }
       console.log();
    }
   }
   else{
     console.log("the number shoulds be in between 1 to 5");
   }
}
let num = process.argv[2];
pattern(num);