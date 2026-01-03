const prompt = require('prompt-sync')(); // For input in Node.js

let arr = [10, 5, 8, 2];

console.log("Initial Array:", arr);

console.log(`
Choose an operation:
1. Push
2. Pop
3. Shift
4. Unshift
5. Sort
6. Reverse
`);

let choice = parseInt(prompt("Enter your choice (1-6): "));

switch (choice) {
    case 1:
        let pushVal = parseInt(prompt("Enter value to push: "));
        arr.push(pushVal);
        console.log("After push:", arr);
        break;
    case 2:
        arr.pop();
        console.log("After pop:", arr);
        break;
    case 3:
        arr.shift();
        console.log("After shift:", arr);
        break;
    case 4:
        let unshiftVal = parseInt(prompt("Enter value to unshift: "));
        arr.unshift(unshiftVal);
        console.log("After unshift:", arr);
        break;
    case 5:
        arr.sort((a, b) => a - b);
        console.log("After sort:", arr);
        break;
    case 6:
        arr.reverse();
        console.log("After reverse:", arr);
        break;
    default:
        console.log("Invalid choice.");
}
