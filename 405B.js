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
    let A = lines[1].split(" ").map(Number);
    for (let i = 0; i <=N; i++) {
        const trimmed = A.slice(0, N - i);
        const set = new Set(trimmed);
        let isValid = true;

        for (let j = 1; j <= M; j++) {
            if (!set.has(j)) {
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            console.log(i);
            return;
        }
    }
});
