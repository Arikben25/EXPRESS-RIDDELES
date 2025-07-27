import {Person} from "../utils/allimports.js"
import rl from "readline-sync"

export function createUsser(){
    const userName = rl. question('Please enter your username: ')
    const password = rl. question('Please create a password with a minimum length of 5 digits.')// בדיקת אורך
    const person = new Person()
}