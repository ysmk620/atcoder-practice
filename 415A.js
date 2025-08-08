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
    let N = parseInt(lines[0]);
    let X = parseInt(lines[2]);
    let arr = lines[1].split(" ").map(Number);
    if (arr.includes(X)) {
        console.log("Yes");
    } else {
        console.log("No");
    }
});
