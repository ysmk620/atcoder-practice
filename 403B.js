process.stdin.resume();
process.stdin.setEncoding("utf8");
var lines = [];
var reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
reader.on("line", (line) => {
    lines.push(line);
});
reader.on("close", () => {
    const T = lines[0];
    const U = lines[1];
    const tLength = T.length;
    const uLength = U.length;
    let possible = false;
    for (let i = 0; i <= tLength - uLength; i++) {
        let match = true;
        for (let j = 0; j < uLength; j++) {
            if (T[i + j] !== "?" && T[i + j] !== U[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            possible = true;
            break;
        }
    }
    console.log(possible ? "Yes" : "No");
});
