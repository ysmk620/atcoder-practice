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
    const [n,m]=lines[0].split(' ').map(Number);
    const s = [];
  for (let i = 0; i < n; i++) s.push(lines[i + 1].trim());

  const pt = Array(n).fill(0);

  for (let j = 0; j < m; j++) {
    let x = 0, y = 0;

    for (let i = 0; i < n; i++) {
      const ch = s[i][j];
      if (ch === '0') x++;
      else y++;
    }

    for (let i = 0; i < n; i++) {
      const ch = s[i][j];
      if (ch === '0') {
        if (x <= y) pt[i]++;
      } else {
        if (x >= y) pt[i]++;
      }
    }
  }

  const high = Math.max(...pt);
  const ans = [];
  for (let i = 0; i < n; i++) if (pt[i] === high) ans.push(String(i + 1));
  console.log(ans.join(' '));
});