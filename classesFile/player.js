

export default class Person{
    constructor(name){
        this.name = name;
        this.time= [];
        console.log(`welcome ${this.name}\r\n`);


    }
    average(){
        let sum = 0
        this.time.forEach(element => {
            sum += element
        });
        return sum / this.time.length

    }
}

