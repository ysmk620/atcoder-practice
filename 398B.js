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
    const cards = lines[0].split(" ").map(Number);
    const counts = {}; //空のオブジェクト（キーと値のペアを格納できる入れ物）を定義
    for (const card of cards) {
        counts[card] = (counts[card] || 0) + 1;
    }
    const countValues = Object.values(counts).sort((a, b) => b - a);
    let canMakeFullHouse = false;
    if (countValues[0] >= 3 && countValues[1] >= 2) {
        canMakeFullHouse = true;
    }
    else if (countValues[0] >= 3 && countValues[1] >= 3) {
        canMakeFullHouse = true;
    }
    if (canMakeFullHouse) {
        console.log("Yes");
    } else {
        console.log("No");
    }
});
