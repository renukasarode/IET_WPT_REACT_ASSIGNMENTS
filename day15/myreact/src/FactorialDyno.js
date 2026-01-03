import { useState } from "react";

export default function FactorialDyno(props)
{  
  const[num,setNum] = useState(0);
  const[result,setResult] = useState(0);

  function inputHandler(e)
  {
    setNum(e.target.value);
  }
  function getFactorial()
  {
    let result =1;
    for(let i=1;i<=num;i++)
    {
      result = result*i;
    }
    return result;
  }

  function btnHandler()
  {
    setResult(getFactorial());

  }

  return(
    <div>
        <lable>enter number</lable>
        <input type="number" onChange={inputHandler}></input>
        <button onClick={btnHandler}>get Factorial</button>
        <p>Factorial is:{result}</p>
    </div>
  )
}