import rl from "readline-sync"
import {createNewRiddle, StartingGame} from "../utils/allimports.js"

export async function userMenu(userName , userType) {
    let my_bool = true
    while (my_bool) {
        const choice = rl.question(`
        To start a game press 1.
        To add a puzzle press 2.
        To see your high score press 3.
        To exit press 0.
        `)
    
        switch(choice){
            case "1":
                await StartingGame(userName , userType)
                break;
            case "2":
                await createNewRiddle()
                break;
            case "3":
                ///////
                break
            case "0":
                my_bool = false;
                console.log(`EXIT`);
                break;
            default:
                console.log(`The number you selected is not defined.
                Please select from the menu.`);
                break;
        }
    }
}

