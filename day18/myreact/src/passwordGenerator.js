import { useCallback, useEffect, useState } from "react";

function GeneratePassword()
{
    const [length,setLength] = useState(12);
    const [password,setPassword] = useState('');
    const[isNumber,setIsNumber] = useState(false);
    const[isSymbol,setIsSymbol] = useState(false);

    function generatePassword()
    {
        let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers = "1234567890";
        let symbols = "!@#$%^&*()_+:>?/.<,;:}{][";
        if(isNumber) characters+=numbers;
        if(isSymbol) characters+=symbols;

        let newPassword = '';
        for(let i=0;i<length;i++)
     {
        newPassword += characters.charAt(Math.floor(Math.random()*characters.length));
        setPassword(newPassword);
     }
    }
    useEffect(()=>{generatePassword()},[length,isNumber,isSymbol]);

    useCallback(()=>{generatePassword()},[length,isNumber,isSymbol]);

   // useCallback(() => { generatePassword() },
   //  [length, includeNumbers, includeSymbols])

    function inputHandler(e)
    {
        setLength(parseInt(e.target.value))
    }
    function copyToClipboard()
    {
      console.log("in copy function");
      
        navigator.clipboard.writeText(password);
        alert("password is copied successfully!!!");
      
    }
     return(
        <>
        <div className="password-generator">
         <h4>Password Generator</h4>
          <label>length of password</label>
         <input type="number" value={length} id="id1" min="1"
           max="32" onChange={(e)=>{inputHandler(e)}}/>

           
         <br></br><br></br>
         <label for='ch1'>
         <input type="checkbox" value='includeNumbers' id="ch1" onChange={()=>setIsNumber(!isNumber)}/>includeNumbers
         </label>
         <br></br><br></br>
         <label for='ch2'>
         <input type="checkbox" value='includeSymbols' id="ch2" onChange={()=>setIsSymbol(!isSymbol)}/>includeSymbols
         </label>
         <br></br><br></br>
         <button onClick={GeneratePassword}>GeneratePassword</button>
         <div>
            <input type="text" value={password} readOnly></input>
            <button onClick={copyToClipboard}>Copy</button>
         </div>
        </div>
        </>
     )
}
export default GeneratePassword;
