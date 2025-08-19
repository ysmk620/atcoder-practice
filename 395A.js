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
    const N = parseInt(lines[0]);
    let arr = lines[1].split(" ").map(Number);
    let result;
    for (let i = 0; i < N-1; i++) {
        if (arr[i] < arr[i + 1]) {
            result = "Yes";
        } else {
            result = "No";
            break;
        }
    }
    console.log(result);
});
