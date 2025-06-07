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
  let N = parseInt(lines[0]);
  let A = lines[1].split(" ").map(Number);
  let answer = 0;

  for (let x = 0; x <= N; x++) {
    let count = 0;
    for (let i = 0; i < N; i++) {
      if (A[i] >= x) count++;
    }
    if (count >= x) {
      answer = x;
    }
  }

  console.log(answer);
});
