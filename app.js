import readLine from "readline-sync"
import person from "./classesFile/player.js"
import allimports from "./allimports.js";




const userName = readLine.question("enter your name: ")

function manegger(name, puzzesArr) {
    const personi = new person(name)

    puzzesArr.forEach(element => {
        // const start = Date.now()
        // element.startPuzz()
        // const end = Date.now()
        // const sumTime = (end - start)/1000
        const sumTime = getTime(()=> element.startPuzz())
        personi.time.push(sumTime)
        console.log(`It took you ${sumTime} seconds to solve the puzzle.`)

    });
    const averageTime = personi.average()
    console.log(`all due respect ${name} It took you an average of ${averageTime} seconds to solve each puzzle.`)


}


manegger(userName, allimports)


function getTime(func){
    const start = Date.now()
    func()
    const end = Date.now()
    return (end - start) / 1000
}