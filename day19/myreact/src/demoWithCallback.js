import React, { useState, useCallback } from "react";

const funcSet = new Set();

const DemoWithCallBack = () => {

    const incCnt = useCallback((prevcnt) =>prevcnt+1 );
    const decCnt = useCallback((prevcnt) =>prevcnt-1);
    const incNum = useCallback((prevnum) =>prevnum+1);

    console.log(incCnt);
    funcSet.add(incCnt);
    funcSet.add(decCnt);
    funcSet.add(incNum);
    alert(funcSet.size);

    return (
        <div>
            <h2>Without useCallback Hook</h2>
            <button onClick={incCnt}>Increase Counter</button>
            <button onClick={decCnt}>Decrease Counter</button>
            <button onClick={incNum}>Increase Number</button>
        </div>
    );
};

export default DemoWithCallBack;