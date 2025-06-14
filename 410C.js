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
  const [N, Q] = lines[0].split(" ").map(Number);
  const A = Array.from({ length: N }, (_, i) => i + 1);
  let shift = 0;
  const output = [];

  for (let i = 1; i <= Q; i++) {
    const parts = lines[i].split(" ").map(Number);
    const type = parts[0];

    if (type === 1) {
      const [_, p, x] = parts;
      const index = (shift + p - 1) % N;
      A[index] = x;
    } else if (type === 2) {
      const [_, p] = parts;
      const index = (shift + p - 1) % N;
      output.push(A[index]);
    } else if (type === 3) {
      const [_, k] = parts;
      shift = (shift + k) % N;
    }
  }

  console.log(output.join("\n"));
});
