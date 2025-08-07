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
    let N = parseInt(lines[0]);
    let totalLength = 0;
    for (let i = 0; i < N; i++) {
        let arr = lines[i + 1].split(" ");
        let count = parseInt(arr[1]);
        totalLength += count;
    }
    if (totalLength > 100) {
        console.log("Too Long");
        return;
    }
    let result = "";
    for (let i = 0; i < N; i++) {
        let arr = lines[i + 1].split(" ");
        let char = arr[0];
        let count = parseInt(arr[1]);
        result += char.repeat(count);
    }
    console.log(result);
});
