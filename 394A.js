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
    const s = lines[0].split("").map(Number);
    let ans=[];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 2) {
            ans.push(2);
        }
    }
    console.log(ans.join(""));
});
