import readLine from "readline-sync"

export  class Riddle {
    constructor({_id, name, question, answer}) {
        this.id = _id
        this.name = name
        this.taskDescription = question//לשנות שמות
        this.correctAnswer = answer//לשנות שמות
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