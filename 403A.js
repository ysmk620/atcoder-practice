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
    const n = parseInt(lines[0]);
    const a = lines[1].split(" ").map(Number);
    let sum = 0;
    for (let i = 0; i < n; i += 2) {
        sum += a[i];
    }
    console.log(sum);
});
