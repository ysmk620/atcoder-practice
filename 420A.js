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
    const [x, y] = lines[0].split(" ").map(Number);
    let sum = x + y;
    if (sum <= 12) {
        console.log(sum);
    } else {
        sum = sum - 12;
        console.log(sum);
    }
});
