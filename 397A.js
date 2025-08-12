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
    const X = lines[0];
    if (X >= 38.0) {
        console.log(1);
    } else if (37.5 <= X && X < 38.0) {
        console.log(2);
    } else if (X < 37.5) {
        console.log(3);
    }
});
