function factorial(abc)
{
    if(abc==0)
    {
        return 1;
    }
    else
    {
        return abc*factorial(--abc);
    }
}
 const args = process.argv[2];
  
let num =args;
console.log(factorial(num));
