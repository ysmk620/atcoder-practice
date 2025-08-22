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
    const s = lines[1].split("");
    if (s[n - 1] === "a" && s[n - 2] === "e" && s[n - 3] === "t") {
        console.log("Yes");
    } else {
        console.log("No");
    }
});
