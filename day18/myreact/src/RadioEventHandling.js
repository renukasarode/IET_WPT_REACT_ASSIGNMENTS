import { useState } from "react"

export default function RadioEventHandler()
{
    const[data, setData] = useState("");

    function handleInput(e)
    {
       setData(e.target.value);

    }

    function upperCaseBtn()
    {
        let newData = data.toUpperCase();
        setData(newData);
    }
    function lowerCaseBtn()
    {
        let newData = data.toLowerCase();
        setData(newData);
    }

     function TitleCaseBtn()
    {
        let firstLetter = data[0].toUpperCase();
        console.log(firstLetter);
        let newData=firstLetter;
        for(let i=1;i<data.length;i++)
        {
            newData =  newData+data[i].toLowerCase();
        }
         console.log(newData);
        setData(newData);
    }

    return(
        <div>
            <label>enter the text</label>
            <input type="text"   onChange={handleInput}></input>
            <br></br>
            <input type="radio" name="case"  onChange={upperCaseBtn}/>UpperCase<br></br>
             <input type="radio" name="case"  onChange={lowerCaseBtn}/>lowerCase<br></br>
              <input type="radio"name="case"  onChange={TitleCaseBtn}/>TitleCase
              <p>your Data is: {data}</p>

        </div>
    )
}