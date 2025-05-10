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
    let [R, X] = lines[0].split(" ").map(Number);
    if (X === 1) {
        if (R >= 1600 && R <= 2999) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    } else if (X === 2) {
        if (R >= 1200 && R <= 2399) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
});
