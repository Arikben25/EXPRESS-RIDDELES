import { getPlyers, insertPlyer, putBastTime, getOnePlayer } from "../controllers/plyerControl.js"
import express from "express"

const router = express.Router()

router.get("/getPlawers", getPlyers)
router.get("/getPlayer", getOnePlayer)
router.post("/insertPlayer", insertPlyer)
router.put("/apdateTime", putBastTime)

export default router