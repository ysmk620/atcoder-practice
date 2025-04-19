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
    const S = lines[0];
    const result = S.split("")
        .filter((c) => c >= "A" && c <= "Z")
        .join("");
    console.log(result);
});
