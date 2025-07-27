

export class Person {
    constructor(name) {
        this.time = [];
        this.name = name;
    }
    hello() {
        console.log(`Hi ${this.name} the game begins now`);
    }

    average() {
        let sum = 0
        this.time.forEach(element => {
            sum += element
        });
        return sum / this.time.length

    }
}