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
  let N=parseInt(lines[0]);
  let count=0;
  for(let i=0;i<N;i++){
    let[A,B]=lines[i+1].split(" ").map(Number);
    if(A<B){
      count+=1;
    }
  }
  console.log(count);
});
