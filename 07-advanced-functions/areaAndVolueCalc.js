function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function solve(area, vol, input) {
    let figures = JSON.parse(input);

    let result = []
    
    figures.forEach(figure => {
        let currentArea = area.call(figure)
        let currentVol = vol.call(figure);

        result.push({
            area: currentArea,
            vol: currentVol
    })
    })
    console.log(JSON.stringify(result));
}
solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
)