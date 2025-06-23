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
    let P = lines[0].length;
    let L = parseInt(lines[1]);
    if (P >= L) {
        console.log("Yes");
    } else {
        console.log("No");
    }
});
