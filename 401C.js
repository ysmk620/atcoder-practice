process.stdin.resume();
process.stdin.setEncoding("utf8");

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = [];
reader.on("line", (line) => {
    lines.push(line);
});

reader.on("close", () => {
    const MOD = 10 ** 9;
    const [N, K] = lines[0].split(" ").map(Number);

    const A = new Array(N + 1).fill(0);
    let sum = 0;

    for (let i = 0; i < K && i <= N; i++) {
        A[i] = 1;
        sum = (sum + A[i]) % MOD;
    }

    for (let i = K; i <= N; i++) {
        A[i] = sum;
        sum = (sum + A[i] - A[i - K] + MOD) % MOD;
    }

    console.log(A[N]);
});
