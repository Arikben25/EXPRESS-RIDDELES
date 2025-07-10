

export default class Person{
    constructor(){
        this.time= [];
    }
    average(){
        let sum = 0
        this.time.forEach(element => {
            sum += element
        });
        return sum / this.time.length

    }
}