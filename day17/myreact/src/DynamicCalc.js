import { useState } from "react"

export default function DynamicCalc(props)
{
   const[num1,setNum1] = useState(0);
   const[num2,setNum2] = useState(0);
   const[addResult,setaddResult] = useState(0);
   const[SubResult,setSubResult] = useState(0);
   const[MultiResult,setMultiResult] = useState(0);
   const[divResult,setdivResult] = useState(0);



function Addition()
{
    console.log("in addition");
    return num1+num2;
}
function Substraction()
{
    console.log("in substraction");
    return num1-num2;
}
function Multiplication()
{
    console.log("in substraction");
    return num1*num2;
}
function Division()
{
    console.log("in substraction");
    return num1/num2;
}
function inputHandlerNum1(e)
{
    console.log("in inputhANDLER1");
    setNum1(parseFloat(e.target.value));
    console.log(num1);
}

function inputHandlerNum2(e)
{
     console.log("in inputhANDLER2"); 
    setNum2(parseFloat(e.target.value));
    console.log(num2);
}

function buttonHandler()
{
    console.log("in buttonHandler");
    console.log("in num1",num1)
    console.log("addition is ",Addition())
    setaddResult(Addition());
    setSubResult(Substraction());
    setMultiResult(Multiplication());
    setdivResult(Division());
   
  
   
}
return(
    <div>
        <lable>enter num1</lable>
        <input type="text" onBlur={(e)=>inputHandlerNum1(e)}></input><br></br>
        <lable>enter num2</lable>
        <input type="text" onBlur={(e)=>inputHandlerNum2(e)}></input><br></br>
        <button onClick={buttonHandler}>calculate</button> 
        
        <p>Addition is : {addResult}</p>
         <p>Subtraction is : {SubResult}</p>
          <p>Multiplication is : {MultiResult}</p>
           <p>Division is : {divResult}</p>
    </div>
)
}