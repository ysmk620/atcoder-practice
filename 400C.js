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
    let N = BigInt(lines[0]);
    let goodNumbers = new Set();

    const sqrtN = BigInt(Math.floor(Math.sqrt(Number(N))));

    for (let b = 1n; b <= sqrtN; b++) {
        let x = b * b * 2n;
        while (x <= N) {
            goodNumbers.add(x);
            x *= 2n;
        }
    }

    console.log(goodNumbers.size.toString());
});
