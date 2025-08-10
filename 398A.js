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
    if (N % 2 === 0) {
        console.log(
            "-".repeat(Math.floor(N / 2) - 1) +
                "=".repeat(2) +
                "-".repeat(Math.floor(N / 2) - 1)
        );
    } else {
        console.log(
            "-".repeat(Math.floor(N / 2)) + "=" + "-".repeat(Math.floor(N / 2))
        );
    }
});
