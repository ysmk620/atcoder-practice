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
    const n=parseInt(lines[0]);
    let s=[];
    for(let i=0;i<n;i++){
        s.push(lines[i+1]);
    }
    s.sort(((a, b) => a.length - b.length));
    console.log(s.join(""));
});


