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
    const N = parseInt(lines[0]);
    const operations = lines.slice(1, N + 1);

    let loggedIn = false;
    let authErrorCount = 0;

    for (let i = 0; i < operations.length; i++) {
        const op = operations[i];

        if (op === "login") {
            loggedIn = true;
        } else if (op === "logout") {
            loggedIn = false;
        } else if (op === "private") {
            if (!loggedIn) {
                authErrorCount++;
            }
        }
    }

    console.log(authErrorCount);
});
