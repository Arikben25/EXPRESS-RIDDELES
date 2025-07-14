import readLine from "readline-sync"
import person from "./classesFile/player.js"
import allriddles from "./utils/allimports.js";
import {getAllRiddles} from "./utils/allimports.js"


menu()
function menu(){
    const choice = readLine.question(`plise enter your choice:
    \r\nenter 1. to Play the game
    \r\nenter 2. to Read all riddles
    \r\nenter 3. to Create a new riddle
    \r\nenter 4. to Update a riddle
    \r\nenter 5. to Delete a riddle
    \r\nenter 6. to View leaderboard
    `)
    switch(choice){
        case "1":
            manager()
            break;
        case "2":
            getAllRiddles.getAllRiddles()
            break;
        case "3":
            createNewRiddle()
            break;
        case "4":
            appdateRiddle()
            break
        case "5":
            deleteRiddle()
            break
        case "6":
            viewLeaderboard()
            break
    }
}






function manager() {
    const userName = readLine.question("enter your name: ")
    console.log(`welcome ${userName}\r\n`);
    const newPerson = new person()

    allriddles.forEach(element => {
        const sumTime = getTime(()=> element.startPuzz())
        newPerson.time.push(sumTime)
        console.log(`It took you ${sumTime.toFixed(2)} seconds to solve the puzzle.`)

    });
    const averageTime = newPerson.average()
    console.log(`all due respect ${userName} It took you an average of ${averageTime.toFixed(2)} seconds to solve each puzzle.`)

}


function getTime(func){
    const start = Date.now()
    func()
    const end = Date.now()
    return (end - start) / 1000
}