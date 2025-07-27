import bcrypt from "bcrypt"
import { readOnePlayer } from "../dal/playerService.js"

// Password encryption function

export async function Encryption(req, res, next) {
    const { password } = req.body;
    try {
        req.body.password = await bcrypt.hash(password, 10)
        next()
    } catch (err) {
        console.error('the incryption is err', err)
        res.status(500).json({ msg: "the server is error try later" })
    }
}


export async function passwordComparison(req, res) {
    const { name, password } = req.body
    try {
        const user = await readOnePlayer(name)
        const compare = await bcrypt.compare(password, user[0].password)
        res.json({
            msg: `Hey ${name}, good to see you again :)`,
            UserType:user[0].UserType 
        })
    } catch (err) {
        res.status(500).json({ msg: "the server is error try later" })
    }
}
