
function solve(...args) {
    const counts = {};
    const order = {};

    for (const arg of args) {
        const type = typeof arg;

        console.log(`${type}: ${arg}`);

        if (counts[type] === undefined) {
            counts[type] = 0;
            order[type] = Object.keys(order).length;
        }

        counts[type]++;
    }

    const sortedTypes = Object.keys(counts).sort((a, b) => {
        return counts[b] - counts[a] || order[a] - order[b];
    });

    for (const type of sortedTypes) {
        console.log(`${type} = ${counts[type]}`);
    }
}
solve('cat', 42, function () { console.log('Hello world!'); })