import rl from "readline-sync"
import person, { Person } from "./classesFile/player.js"
import { getTime, getAllRiddles, createNewRiddle, readRiddles } from "./utils/allimports.js"


menu()
function menu() {
    const choice = rl.question(`plise enter your choice:
    \r\nenter 1. to Play the game
    \r\nenter 2. to Read all riddles
    \r\nenter 3. to Create a new riddle
    \r\nenter 4. to Update a riddle
    \r\nenter 5. to Delete a riddle
    \r\nenter 6. to View leaderboard
    `)
    switch (choice) {
        case "1":
            manager()
            break;
        case "2":
            getAllRiddles()
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



async function startGame() {
    const userName = rl.question("enter your name: ")
    console.log(`welcome ${userName}\r\n`);
    const person = new person()
    const arrRidlles = await readRiddles()

    arrRidlles.forEach(element => {
        const sumTime = getTime(() => element.startPuzz())
        person.time.push(sumTime)
        console.log(`It took you ${sumTime.toFixed(2)} seconds to solve the puzzle.`)

    });
    const averageTime = person.average()
    console.log(`all due respect ${userName} It took you an average of ${averageTime.toFixed(2)} seconds to solve each puzzle.`)
}


async function startGame1() {
    
    const arrRidlles = await readRiddles()
    const person = new Person()
    arrRidlles.forEach(element => {
        const sumTime = getTime(() => element.startPuzz())
        person.time.push(sumTime)
        console.log(`It took you ${sumTime.toFixed(2)} seconds to solve the puzzle.`)

    });
    const averageTime = person.average()
    console.log(`all due respect ${userName} It took you an average of ${averageTime.toFixed(2)} seconds to solve each puzzle.`)
}