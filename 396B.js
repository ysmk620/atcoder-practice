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
const Q=parseInt(lines[0]);
let arr=new Array(100).fill(0);
for(let i=0;i<Q;i++){
    let query=lines[i+1].split(' ').map(Number);
    if(query[0]===1){
        arr.push(query[1]);
    }else if(query[0]===2){
        console.log(arr[arr.length-1]);
        arr.pop();
    }
}
});