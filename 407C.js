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
  let S = lines[0];
  let N = S.length;
  let digits = S.split('').map(digit => parseInt(digit));
  let ans = 0;
  for (let i = 0; i < N - 1; i++) {
    let diff = (digits[i] - digits[i + 1] + 10) % 10;
    ans += diff;
  }
  ans += digits[N - 1];
  ans += N;

  console.log(ans);
});
