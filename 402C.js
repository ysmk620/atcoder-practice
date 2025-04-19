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
    const [N, M] = lines[0].split(" ").map(Number);
    const foods = [];

    for (let j = 0; j < M; j++) {
        const food = lines[j + 1].split(" ").map(Number);
        foods.push(food.slice(1));
    }

    const B = lines[M + 1].split(" ").map(Number);

    let canEatCount = new Array(M).fill(0);
    let totalEatable = 0;
    let defeatedIngredients = new Set();

    for (let i = 0; i < N; i++) {
        const target = B[i];
        defeatedIngredients.add(target);

        let newEatable = 0;

        for (let j = 0; j < M; j++) {
            if (canEatCount[j] === 0 && foods[j].every((ingredient) => defeatedIngredients.has(ingredient))) {
                canEatCount[j] = 1;
                newEatable++;
            }
        }

        totalEatable += newEatable;
        console.log(totalEatable);
    }
});
