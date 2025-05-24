process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
let[X,Y]=lines[0].split(" ").map(Number);
 let count = 0;
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      const sum = i + j;
      const diff = Math.abs(i - j);
      if (sum >= X || diff >= Y) {
        count++;
      }
    }
  }
  const probability = count / 36;
  console.log(probability);
});