const { log } = require("console");

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
    let [n, m] = lines[0].split(" ").map(Number);
    let x = 0;
    for (let i = 0; i <= m; i++) {
        x += n ** i;
    }
    if (x <= 10 ** 9) {
        console.log(x);
    } else {
        console.log("inf");
    }
});
