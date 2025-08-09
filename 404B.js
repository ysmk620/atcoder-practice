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
    const S = [];
    const T = [];
    for (let i = 0; i < N; i++) {
        S.push(lines[i + 1].split(""));
    }
    for (let j = 0; j < N; j++) {
        T.push(lines[N + j + 1].split(""));
    }
    const rotate90 = (grid) => {
        const res = Array.from({ length: N }, () => Array(N));
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                res[i][j] = grid[N - 1 - j][i];
            }
        }
        return res.map((row) => row.join(""));
    };
    const diffCount = (A, B) => {
        let cnt = 0;
        for (let i = 0; i < N; i++) {
            const rowA = A[i],
                rowB = B[i];
            for (let j = 0; j < N; j++) {
                if (rowA[j] !== rowB[j]) cnt++;
            }
        }
        return cnt;
    };
    let ans = Infinity;
    let cur = S.slice();
    for (let r = 0; r < 4; r++) {
        const cost = r + diffCount(cur, T);
        if (cost < ans) ans = cost;
        cur = rotate90(cur);
    }
    console.log(ans);
});
