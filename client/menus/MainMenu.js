import rl from "readline-sync"
import { createUsser, log_in, StartingGame } from "../utils/allimports.js"

export async function mainMenu() {
    let my_bool = true;
    while (my_bool) {

        const choice = rl.question(`
        To play as a guest, press 1.
        To register, press 2.
        To connect, press 3.
        To exit, press 0.
        `);

        switch (choice) {
            case "1":
                const userName = rl.question("Please enter your name: ")
                await StartingGame(userName, "guest")
                break;
            case "2":
                await createUsser()
                break;
            case "3":
                await log_in()
                break;
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