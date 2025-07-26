process.stdin.resume();
process.stdin.setEncoding('utf8');
const lines = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  let [N, K, X] = lines[0].split(" ").map(Number);
  let S = lines.slice(1, N + 1);
  const result = [];
  const generate = (current) => {
    if (current.length === K) {
      result.push(current.join(""));
      return;
    }
    for (let i = 0; i < N; i++) {
      generate([...current, S[i]]);
    }
  };

  generate([]);
  result.sort();
  console.log(result[X - 1]);
});
