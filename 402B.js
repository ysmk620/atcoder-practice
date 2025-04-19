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
    const Q = Number(lines[0]);
    const queue = [];
    for (let i = 1; i <= Q; i++) {
        const query = lines[i].split(" ");
        if (query[0] === "1") {
            const x = Number(query[1]);
            queue.push(x);
        } else if (query[0] === "2") {
            const served = queue.shift();
            console.log(served);
        }
    }
});
