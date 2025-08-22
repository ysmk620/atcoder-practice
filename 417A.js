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
    const [N,A,B]=lines[0].split(" ");
    const S=lines[1];
    let ansArr=[];
    for(let i=A;i<=N-B-1;i++){
        ansArr.push(S[i]);
    }
    console.log(ansArr.join(""));
});

