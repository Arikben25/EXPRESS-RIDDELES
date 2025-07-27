

export class Person{
    constructor(name , password){
        this.time= [];
        this.name = name;
        this.password = password;
    }
    
    average(){
        let sum = 0
        this.time.forEach(element => {
            sum += element
        });
        return sum / this.time.length

    }
}