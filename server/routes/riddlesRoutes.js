import express from "express"
import { getAllRiddles } from "../controllers/riddlesController.js"


const router = express.Router()

router.get("/", getAllRiddles)

// router.post()
// router.delete()
// router.put()

export default router