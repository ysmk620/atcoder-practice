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
    const [n, m] = lines[0].split(" ").map(Number);
    let a = lines[1].split(" ").map(Number);
    const b = lines[2].split(" ").map(Number);
    for (const i of b) {
        let A = [];
        let flag = true;
        for (const j of a) {
            if (flag && i === j) {
                flag = false;
            } else {
                A.push(j);
            }
        }
        a = A;
    }
    console.log(a.join(" "));
});
