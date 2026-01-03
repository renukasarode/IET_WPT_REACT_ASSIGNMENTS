function resolveLater(callback) {
    return new Promise(
        (resolve) => {
            setInterval(() => {
                callback();
                resolve(console.log("Hello World "));
            }, 1000);
        });
}

function display() {
    console.log("Hello World from display");
}

resolveLater(display);
