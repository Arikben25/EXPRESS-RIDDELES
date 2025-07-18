//import express from "express"
import { readAllRiddles } from "../dal/riddleService.js"


export function getAllRiddles(req, res) {
    try {
        const data = readAllRiddles()
        res.json(data)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
    //const {id} = req.params
}

