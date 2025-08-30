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
    const[x,y]=lines[n+1].split(" ");
    const X=parseInt(x);
    if(lines[X]===y){
        console.log("Yes");
    }else{
        console.log("No");
    }
});


