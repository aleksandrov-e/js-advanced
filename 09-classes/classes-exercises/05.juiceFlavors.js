
function solve(input) {
    let juices = {};
    let bottles = {};

    for (const line of input) {
        let [juice, quantity] = line.split(" => ");
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = 0;
        }
        juices[juice] += quantity;

        if (juices[juice] >= 1000) {
            let producedBottles = Math.floor(juices[juice] / 1000);

            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = 0;
            }
            bottles[juice] += producedBottles;

            juices[juice] %= 1000;
        }
    }

    for (const [juice, bottleCount] of Object.entries(bottles)) {
        console.log(`${juice} => ${bottleCount}`);
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)