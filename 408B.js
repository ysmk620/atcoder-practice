process.stdin.resume();
process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.on("line", (line) => {
    lines.push(line);
});

reader.on("close", () => {
    const N = parseInt(lines[0]);
    const A = lines[1].split(" ").map(Number);
    const setA = new Set(A);
    let arrA = Array.from(setA);
    arrA.sort((a, b) => a - b);
    console.log(setA.size);
    console.log(arrA.join(" "));
});
