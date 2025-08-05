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
    let [N, M] = lines[0].split(" ").map(Number);
    let total = 0;
    let A = lines[1].split(" ").map(Number);
    for (let i = 0; i < N; i++) {
        total += A[i];
    }
    if (total <= M) {
        console.log("Yes");
    } else {
        console.log("No");
    }
});
