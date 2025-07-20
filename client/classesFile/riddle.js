import readLine from "readline-sync"

export default class Riddle {
    constructor(id, name, taskDescription, correctAnswer) {
        this.id = id
        this.name = name
        this.taskDescription = taskDescription
        this.correctAnswer = correctAnswer
    }
    
    startPuzz(){
        var myBool = true
    
        while(myBool){

            console.log(` puzzle: ${this.id}, yuor name is: ${this.name}
            the puzzle is: ${this.taskDescription}`)
            
    
            const answer = readLine.question("Enter your answer: ");

            if (answer == this.correctAnswer){
                console.log("is correct")
                myBool = false
  
            }else{
                console.log("is not correct")
            }
              
        }

    }
}