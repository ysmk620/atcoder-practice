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
    let arr = [];
    const q = parseInt(lines[0]);
    for (let i = 0; i < q; i++) {
        let query = lines[i + 1].split(" ").map(Number);
        if (query[0] === 1) {
            arr.push(query[1]);
        } else if (query[0] === 2) {
            arr.sort((a, b) => a - b);
            console.log(arr[0]);
            arr.shift();
        }
    }
});
