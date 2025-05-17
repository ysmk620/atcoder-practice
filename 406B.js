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
    const [N, K] = lines[0].split(" ").map(Number);
    const A = lines[1].split(" ").map(BigInt);

    let ans = BigInt(1);
    const limit = BigInt(10) ** BigInt(K);

    for (let i = 0; i < N; i++) {
        ans *= A[i];
        if (ans >= limit) {
            ans = BigInt(1);
        }
    }

    console.log(ans.toString());
});
