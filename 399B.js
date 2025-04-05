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
  const n = parseInt(lines[0]);
  const s = lines[1].split(" ").map(Number);

  const rank = new Array(n).fill(0);

  const scoreSort = s
    .map((score, index) => ({ score, index }))
    .sort((a, b) => b.score - a.score);

  let currentRank = 1;
  let sameScore = 1;

  for (let i = 0; i < n; i++) {
    if (i > 0 && scoreSort[i].score < scoreSort[i - 1].score) {
      currentRank = i + 1;
      sameScore = 1;
    } else if (i > 0 && scoreSort[i].score === scoreSort[i - 1].score) {
      sameScore++;
    }

    rank[scoreSort[i].index] = currentRank;
  }

  rank.forEach((rank) => console.log(rank));
});
