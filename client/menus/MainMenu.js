import rl from "readline-sync"

export function mainMenu() {
    let my_bool = true;
    while (my_bool) {

        const choice = rl.question(`
        To play as a guest, press 1.
        To register, press 2.
        To connect, press 4.
        To exit, press 0.
        `);

        switch (choice) {
            case "1":
                //////
                break;
            case "2":
                /////
                break;
            case "3":
                /////
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

mainMenu()