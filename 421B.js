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
  const tokens = lines[0].split(' ').map(Number);
  const X = tokens[0];
  const Y = tokens[1];
  const f = (x) => Number(String(x).split('').reverse().join(''));
  let prev2 = X;
  let prev1 = Y;
  for (let i = 3; i <= 10; i++) {
    const s = prev1 + prev2;
    const ai = f(s);
    prev2 = prev1;
    prev1 = ai;
  }
  console.log(prev1);

});


