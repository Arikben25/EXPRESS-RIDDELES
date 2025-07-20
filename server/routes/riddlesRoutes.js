import express from "express"
import { getAllRiddles,addRiddle } from "../controllers/riddlesController.js"


const router = express.Router()

router.get("/", getAllRiddles)
router.post("/",addRiddle)
// router.delete()
// router.put()

export default router