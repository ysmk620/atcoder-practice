process.stdin.resume();
process.stdin.setEncoding("utf8");
const lines = [];
const reader = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
reader.on("line", (line) => {
    lines.push(line);
});
reader.on("close", () => {
    const [N, M, Q] = lines[0].split(" ").map(Number);

    const fullAccess = new Set();
    const permissions = new Map();
    const results = [];

    for (let i = 1; i <= Q; i++) {
        const query = lines[i].split(" ").map(Number);
        const type = query[0];

        if (type === 1) {
            const X = query[1];
            const Y = query[2];
            if (!fullAccess.has(X)) {
                if (!permissions.has(X)) {
                    permissions.set(X, new Set());
                }
                permissions.get(X).add(Y);
            }
        } else if (type === 2) {
            const X = query[1];
            fullAccess.add(X);
            permissions.delete(X);
        } else if (type === 3) {
            const X = query[1];
            const Y = query[2];
            if (fullAccess.has(X)) {
                results.push("Yes");
            } else if (permissions.has(X) && permissions.get(X).has(Y)) {
                results.push("Yes");
            } else {
                results.push("No");
            }
        }
    }

    console.log(results.join("\n"));
});
