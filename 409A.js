process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.on("line", (line) => {
    lines.push(line);
});

reader.on("close", () => {
    let N = parseInt(lines[0]);
    let T = lines[1];
    let A = lines[2];

    for (let i = 0; i < N; i++) {
        if (T[i] === "o" && A[i] === "o") {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
});
