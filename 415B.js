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
    let S = lines[0].split("");
    let arr = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "#") {
            arr.push(i+1);
        }
    }
    for (let j = 0; j < arr.length; j += 2) {
        console.log(arr[j]+","+arr[j + 1]);
    }
});
