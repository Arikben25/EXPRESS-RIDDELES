import {Riddle} from "../classesFile/riddle.js"
import {getAllRiddles} from "./riddleService.js"

async function readRiddles() {
    const allriddles = await getAllRiddles()
    const arrRidlles = allriddles.map(element => new Riddle(element))
    
    return arrRidlles
}


export{
    readRiddles
} 