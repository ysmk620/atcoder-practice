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
  let str = lines[0];
  let n = str.length;

  let firstChar = str[0];
  let differentChar = null;
  let differentPos = -1;

  for (let i = 0; i < n; i++) {
    if (str[i] !== firstChar) {
      if (differentChar === null) {
        differentChar = str[i];
        differentPos = i + 1;
      } else if (str[i] === differentChar) {
        differentPos = 1;
      }
    }
  }
  console.log(differentPos);
});
