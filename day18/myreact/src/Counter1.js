

import Counter2 from './Counter2';
import ErrorBoundary from './errorBoundry'
import Counter3 from './Counter3'
const { useState } = require("react")

const Counter1 = () => {
  const [count1, setCounter1] = useState(1);
  const increament1 = () => {
    setCounter1(count1 + 1);
  }  //

  const [count2, setCounter2] = useState(10);
  const increament2 = () => {
    setCounter2(count2 + 1);
  }



  return (
    <>
      <ErrorBoundary>
        <Counter2 value={count1}
          onClick={increament1}
        ></Counter2>
      </ErrorBoundary>

      <Counter3 value={count2}
        onClick={increament2}></Counter3>
    </>

  )





}

export default Counter1;