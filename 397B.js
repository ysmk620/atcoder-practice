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
    let S=lines[0].split('');
    let count=0;
    for(let i=0;i<S.length;i++){
      if(S[i]===S[i+1]){
        count++;
      }
    }
    if(S[0]!=='i'){
      count++;
    }
    if(S[S.length-1]!=='o'){
      count++;
    }
    console.log(count);
});