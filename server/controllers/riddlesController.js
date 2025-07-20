//import express from "express"
import { readAllReaddles,addOneRiddle,addManyRiddles,delRiddle,putRiddle } from "../dal/riddleService.js"


export async function getAllRiddles(req, res) {
    try {
        const data = await readAllReaddles()
        res.json(data)
    } catch (error) {
        console.error("Error getting riddles:", error.message);
        res.status(500).json({ msg: "Server error. Please try again later." })
    }
    //const {id} = req.params
}

export async function addRiddle(req, res) {
    try{
      const resolt = await addOneRiddle(req.body)
      res.json(resolt)
    }catch(error){
        console.error("the err is: ",error.message)
        res.status(500).json({ msg: "Server error. Please try again later." })
    }
}
