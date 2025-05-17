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
    let [A, B, C, D] = lines[0].split(" ").map(Number);
    if (A > C) {
        console.log("Yes");
    } else if (A === C) {
        if (B > D) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    } else {
        console.log("No");
    }
});
