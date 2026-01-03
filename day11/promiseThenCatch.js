function display()
{
    const  p = new Promise((resolve,reject)=>{
        const flag = true;
        setTimeout(()=>{
        if(flag)
        {
            resolve("success!!!");
        }
        else
        {
            reject("failure");
        }},2000)
    });
     p.then((result)=>
    {
      console.log(result);
    }).catch((error)=>
    {
        console.log(error);
    });
}
   
    display();
