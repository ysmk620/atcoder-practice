process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
reader.on("line", (line) => {
    lines.push(line);
});
reader.on("close", () => {
    let a = parseInt(lines[0]);
    if (400 % a === 0) {
        console.log(400 / a);
    } else {
        console.log(-1);
    }
});
