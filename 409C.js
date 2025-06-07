process.stdin.resume();
process.stdin.setEncoding('utf8');
const lines = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const [N, L] = lines[0].split(' ').map(Number);
  const d = lines[1].split(' ').map(Number);

  const pos = [0];
  for (let i = 0; i < d.length; i++) {
    pos.push((pos[i] + d[i]) % L);
  }

  let count = 0;
  for (let a = 0; a < N; a++) {
    for (let b = a + 1; b < N; b++) {
      for (let c = b + 1; c < N; c++) {
        const triplet = [pos[a], pos[b], pos[c]].sort((x, y) => x - y);
        const d1 = triplet[1] - triplet[0];
        const d2 = triplet[2] - triplet[1];
        const d3 = triplet[0] + L - triplet[2];
        if (d1 === d2 && d2 === d3) {
          count++;
        }
      }
    }
  }

  console.log(count);
});
