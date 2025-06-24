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
    let [N, S] = lines[0].split(" ");
    let T = lines[1].split(" ").map(Number);
    let result = [];
    if (T[0] > S) {
        result.push("No");
    } else {
        result.push("Yes");
    }
    for (let i = 1; i < N; i++) {
        if (T[i] - T[i - 1] <= S) {
            result.push("Yes");
        } else {
            result.push("No");
        }
    }
    if (result.includes("No")) {
        console.log("No");
    } else {
        console.log("Yes");
    }
});
