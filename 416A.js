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
    let [N, L, K] = lines[0].split(" ").map(Number);
    let S = lines[1].split("");
    let allO = true;

    for (let i = L - 1; i <= K - 1; i++) {
        if (S[i] !== "o") {
            allO = false;
            break;
        }
    }

    console.log(allO ? "Yes" : "No");
});
