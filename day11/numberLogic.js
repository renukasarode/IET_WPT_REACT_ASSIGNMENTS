function checkNumber(num) {
    if (num % 3 == 0) {
        console.log("foo");
    }
    else if (num % 5 == 0) {
        console.log("bar")
    }
    else
    {
        console.log("foo-bar");
    }
}

let num = process.argv[2];
checkNumber(num);