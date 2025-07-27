import { readRiddles } from "../PuzzleFile/p1.js"
import { getAllRiddles, createNewRiddle } from "../PuzzleFile/riddleService.js"
import { Person } from "../classesFile/player.js"
import { getTime } from "./timer.js"
import { StartingGame } from "../startGame.js"
import { putTime, createUsser, log_in } from "../players/playerFetch.js"


export {
    getAllRiddles,
    createNewRiddle,
    getTime,
    readRiddles,
    Person,
    StartingGame,
    putTime,
    createUsser,
    log_in
}