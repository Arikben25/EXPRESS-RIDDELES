//import express from "express"
import {readAllRiddles} from "../dal/riddleService.js"


export function getAllRiddles(req , res){
    //const {id} = req.params
    const data = readAllRiddles()
    res.json(data)
}

