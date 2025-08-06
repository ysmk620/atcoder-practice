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
    const[N,L,R]=lines[0].split(" ").map(Number);
    let lestener=0;
    for(let i=0;i<N;i++){
        const [X,Y]=lines[i+1].split(" ").map(Number);
        if(X<=L && R<=Y){
            lestener++;
        }
    }
    console.log(lestener);
});