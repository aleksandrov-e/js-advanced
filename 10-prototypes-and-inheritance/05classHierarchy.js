
function classes() {
    class Figure {
        constructor() {
            this.units = "cm";
        }

        get area() {
            return 0;
        }

        changeUnits(newUnits) {
            const factors = {
                m: 100,
                cm: 1,
                mm: 0.1
            };

            const coefficient = factors[this.units] / factors[newUnits];

            this._changeDimensions(coefficient);
            this.units = newUnits;
        }

        _changeDimensions(coefficient) {
            // Няма размери за промяна в базовия клас
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        _changeDimensions(coefficient) {
            this.radius *= coefficient;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units = "cm") {
            super();
            this.width = width;
            this.height = height;

            if (units !== "cm") {
                this.changeUnits(units);
            }
        }

        get area() {
            return this.width * this.height;
        }

        _changeDimensions(coefficient) {
            this.width *= coefficient;
            this.height *= coefficient;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
