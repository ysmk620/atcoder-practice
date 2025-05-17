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
  const N = parseInt(lines[0]);
  const P = lines[1].split(' ').map(Number);

  const D = [];
  for (let i = 0; i < N - 1; i++) {
    if (P[i + 1] > P[i]) {
      D.push(1);
    } else {
      D.push(-1);
    }
  }

  const signs = [];
  const lengths = [];
  let current_sign = D[0];
  let current_count = 1;

  for (let i = 1; i < D.length; i++) {
    if (D[i] === current_sign) {
      current_count++;
    } else {
      signs.push(current_sign);
      lengths.push(current_count);
      current_sign = D[i];
      current_count = 1;
    }
  }

  signs.push(current_sign);
  lengths.push(current_count);

  let ans = 0;
  for (let j = 0; j < signs.length - 2; j++) {
    const s1 = signs[j], s2 = signs[j + 1], s3 = signs[j + 2];
    const a = lengths[j], b = lengths[j + 1], c = lengths[j + 2];

    if (s1 === 1 && s2 === -1 && s3 === 1) {
      ans += a * c;
    }
  }

  console.log(ans);
});
