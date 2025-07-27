import { getPlyers, insertPlyer, putBastTime, getOnePlayer } from "../controllers/plyerControl.js"
import { Encryption, passwordComparison } from "../Middleware/Encryption.js"
import express from "express"

const router = express.Router()

router.post("/signIn", passwordComparison)
router.get("/getPlawers", getPlyers)
router.get("/getPlayer", getOnePlayer)
router.post("/insertPlayer", Encryption, insertPlyer)
router.put("/apdateTime", putBastTime)

export default router