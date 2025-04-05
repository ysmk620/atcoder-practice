process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
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
  const S = lines[1];
  const T = lines[2];

  let h = 0;

  for (let i = 0; i < N; i++) {
    if (S[i] !== T[i]) {
      h++;
    }
  }

  console.log(h);
});
