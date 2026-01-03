import { useEffect, useState } from "react";

export default function Counter() {
   const [count, setCount] = useState(0);

    useEffect(() =>
    {
        console.log("in useEffect")
    }, [count])

    function afterCount() {
       // setCount(count+1)
       setCount(count+1)
        console.log("after incrementing");
    }


    return (
        <>
            <h1>
                hello from Counter</h1>
            <p>{count}</p>
            <button onClick={afterCount}>Count</button>
        </>
    )
} 