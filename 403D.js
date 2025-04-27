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
    const [N, D] = lines[0].split(" ").map(Number);
    const arr = lines[1].split(" ").map(Number);

    const freq = new Map();
    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    arr.sort((a, b) => a - b);

    let deleted = 0;
    const used = new Set();

    for (const num of arr) {
        if (used.has(num)) continue;
        if (freq.has(num + D)) {
            deleted += freq.get(num + D);
            used.add(num + D);
        }
    }

    console.log(deleted);
});
