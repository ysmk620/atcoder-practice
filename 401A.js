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
    let s = parseInt(lines[0]);
    if (s >= 200 && s <= 299) {
        console.log("Success");
    } else {
        console.log("Failure");
    }
});
