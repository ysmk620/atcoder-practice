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
    const S = lines[0].trim();
    const n = S.length;
    const T = S.split("");

    for (let i = 0; i < n; i++) {
        if (S[i] === ".") {
            const isSegmentStart = i === 0 || S[i - 1] === "#";
            if (isSegmentStart) {
                T[i] = "o";
            } else {
                T[i] = ".";
            }
        }
    }

    console.log(T.join(""));
});
