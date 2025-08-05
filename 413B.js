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
    let S = [];
    for (let i = 0; i < N; i++) {
        S.push(lines[i + 1]);
    }
    const resultSet = new Set();
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i !== j) {
                const concatenated = S[i] + S[j];
                resultSet.add(concatenated);
            }
        }
    }
    console.log(resultSet.size);
});
