import { useState } from "react"

export default function UserDetails()
{
    const[list,setList] = useState(["Graduate","PG" , "UnderGrad"]);
    const[result,setResult] = useState([""]);
   

    function optionBox()
    {
        return list.map((each,index)=>{
            return(<option value={index}>{each}</option>)
        })
    }

    function inputHandler(e)
    {
        console.log("e is ",e.target.value)
        switch(e.target.value)
        {
         case '0':
         {
            
            setResult("Graduation degree: BE Year:2024 GraduationPercnt:78 univer SPPU");
            break;
         }
         case '1':
         {
            console.log("in postGraduate",e.target.value)
            setResult("PostGraduation degree: ME Year:2027 GraduationPercnt:78 univer SPPU");
            break;
         }
         case '2':
         {
           
            setResult("UnderGraduation SSC Year:2020 HSC Year:2022  univer SPPU");
            break;
         }
        }

    }

 return(
    <div style={{margin:"10px"}} className="outline">
        <label>enter the email</label>
        <input type="text" id="e1"></input><br></br>
        <select onChange={(e)=>{inputHandler(e)}}>
            {optionBox()}
        </select>
        <p>Display info: {result}</p>

    </div>
 )  
}