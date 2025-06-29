import readLine from "readline-sync"

export default class Ridder {
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id
        this.name = name
        this.taskDescription = taskDescription
        this.correctAnswer = correctAnswer
        this.myBool = true
        
    }
    
    startPuzz(){
    
        while(this.myBool){

            console.log(` puzzle: ${this.id}, yuor name is: ${this.name}
            the puzzle is: ${this.taskDescription}`)
            
    
            const answer = readLine.question("Enter your answer: ");

            if (answer==this.correctAnswer){
                console.log("is correct")
                this.myBool = false
  
            }else{
                console.log("is not correct")
            }
              
        }

    }
}

