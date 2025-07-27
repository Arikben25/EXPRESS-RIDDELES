import rl from "readline-sync"
import { Person } from "./classesFile/player.js"
import { getTime, readRiddles, putTime } from "./utils/allimports.js"


export async function StartingGame(userName, userType) {

    const arrRidlles = await readRiddles()
    const person = new Person(userName)

    person.hello()
    arrRidlles.forEach(element => {
        const sumTime = getTime(() => element.startPuzz())
        person.time.push(sumTime)
        console.log(`It took you ${sumTime.toFixed(2)} seconds to solve the puzzle.`)

    });
    const averageTime = person.average()
    if (userType == "guest") {
        console.log(` all due respect ${userName} \r\n It took you an average of ${averageTime.toFixed(2)} seconds to solve each puzzle.`)
        return
    }
    else {
        await putTime(userName, averageTime)
        console.log(` all due respect ${userName} \r\n It took you an average of ${averageTime.toFixed(2)} seconds to solve each puzzle.`)

    }
}
