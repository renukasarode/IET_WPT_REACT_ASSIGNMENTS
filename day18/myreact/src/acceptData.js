import { useState } from "react";

export default function UserData()
{
    const [data, setData] = useState("");
    const [list, setList] = useState([]);

    function inputHandler(e)
    {
       setData(e.target.value);
    }
    function btnHandler()
    {
       if(data ==="") return ;
       setList(...list, data.trim());
       setData("");
    }

    return(
        <>
        <lable>enter name</lable>
        <input type="text" onBlur={inputHandler}></input>
        <button onClick={btnHandler}>Add</button>
        <ol>
             {list.map((each,index)=>{
                  <li>{each}</li>
             })}
        </ol>
        </>
    )
    // <li>{data}</li>
}