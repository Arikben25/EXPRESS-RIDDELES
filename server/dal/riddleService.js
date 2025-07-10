import fs from "fs"
import express from "express"

const app = express()
const path = "./db/riddles.txt"

// פונקציה האחרית לקרוא מהקובץ ולהחזיר את כל החידות לשרת

export function readAllRiddles(){
    try{
        const data = fs.readFileSync(path,"utf-8")
        return JSON.parse(data)
    }
    catch(err){
        console.log(`yuor arr ${err}`);
        return json({error:err})
    }  
}