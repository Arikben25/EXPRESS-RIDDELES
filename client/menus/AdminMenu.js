import rl from "readline-sync"
import {getAllRiddles , createNewRiddle, StartingGame} from "../utils/allimports.js"

export async function adminMenu(userName , userType) {
    let my_bool = true;
    while (my_bool) {

        const choice = rl.question(`
        To start a game press 1.
        To see all puzzles press 2.
        To add a new puzzle press 3.
        To edit a puzzle press 4.
        To delete a puzzle press 5.
        To exit press 0.
        `)

        switch (choice) {
            case "1":
                await StartingGame(userName , userType)
                break;
            case "2":
                await getAllRiddles()
                break;
            case "3":
                await createNewRiddle()
                break;
            case "5":
                ///////
                break;
            case "0":
                my_bool = false;
                break;
            default:
                console.log(`You're already a manager,
                    you should know that you only choose from the menu!!!`);
                break;
        }
    }
}
