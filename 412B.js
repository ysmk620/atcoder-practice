process.stdin.resume();
process.stdin.setEncoding('utf8');

const lines = [];
require('readline')
  .createInterface({ input: process.stdin, output: process.stdout })
  .on('line', line => lines.push(line))
  .on('close', () => {
    const S = lines[0];
    const T = lines[1];

    const isUpper = c => c >= 'A' && c <= 'Z';

    for (let i = 1; i < S.length; i++) {
      if (isUpper(S[i]) && !T.includes(S[i - 1])) {
        console.log('No');
        return;
      }
    }
    console.log('Yes');
  });
