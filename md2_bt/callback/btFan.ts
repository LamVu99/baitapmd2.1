enum level {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3
}

class Fan {
    private on: boolean = false;
    private radius: number = 5;
    private color: string = 'blue';
    private speed: number = level.SLOW;

    constructor(speed: number, on: boolean, radius: number, color: string) {
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }


    toString() {
        if (this.on === true) {
            return `speed: ${this.speed} color: ${this.color} radius: ${this.radius} fan is on`
        } else {
            return `color: ${this.color} radius: ${this.radius} fan is off`
        }
    }
}

let p1 = new Fan(level.FAST, true, 10, 'yellow')
let p2 = new Fan(level.SLOW, false, 10, 'blue')
console.log(p1.toString())
console.log(p2.toString())

