process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => lines.push(line));
reader.on("close", () => {
  const N = parseInt(lines[0]);
  const target = Array.from({ length: N }, () => Array(N).fill("?"));
  for (let i = 0; i < N; i++) {
    const j = N - i - 1;
    if (i > j) break;
    const paint = i % 2 === 0 ? "#" : ".";
    for (let x = i; x <= j; x++) {
      for (let y = i; y <= j; y++) {
        target[x][y] = paint;
      }
    }
  }
  for (let r = 0; r < N; r++) {
    console.log(target[r].join(""));
  }
});
