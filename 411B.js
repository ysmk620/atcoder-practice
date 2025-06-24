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
    let N = parseInt(lines[0]);
    let D = lines[1].split(" ").map(Number);
    for (let i = 0; i < D.length; i++) {
        let sum = 0;
        let array = [];
        for (let j = i; j < D.length; j++) {
            sum += D[j];
            array.push(sum);
        }
        console.log(array.join(" "));
    }
});
