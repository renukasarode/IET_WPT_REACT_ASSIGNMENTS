function getFactorialImpl(choice = "FORLOOP") {

  
  function Fact1(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    console.log(`Factorial (for loop) of ${n} is ${result}`);
    return result;
  }

  
  function Fact2(n) {
    if (n <= 1) return 1;
    return n * Fact2(n - 1);
  }

  if (choice === "FORLOOP") {
    return Fact1;
  } else if (choice === "RECUR") {
    return function(n) {
      const res = Fact2(n);
      console.log(`Factorial (recursion) of ${n} is ${res}`);
      return res;
    };
  } else {
    console.log("Invalid choice, defaulting to FORLOOP");
    return Fact1;
  }
}


let rv = getFactorialImpl("RECUR");
rv(3);  

rv = getFactorialImpl();
rv(5); 
