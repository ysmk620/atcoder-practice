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
    let A = lines[1].split(" ").map(Number);
    let result = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] === A[i + 1] && A[i] === A[i + 2]) {
            result = "Yes";
            break;
        } else {
            result = "No";
        }
    }
    console.log(result);
});
