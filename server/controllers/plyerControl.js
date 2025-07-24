import { readPlyers, addPlyer, putPlayer, readOnePlayer } from "../dal/playerService.js"

export async function getPlyers(req, res) {
    try {
        const data = await readPlyers()
        res.json(data)
    } catch (err) {
        console.error("yor err is: ", err)
        res.status(500).json({ msg: "Information unavailable. Try later." })
    }
}

export async function getOnePlayer(req, res) {
    try {
        const { name } = req.body;
        const data = await readOnePlayer(name)
        res.send(data)
    } catch (err) {
        console.error('err is :'.err)
        res.status(500).json({ msg: "Information unavailable. Try later." })

    }
}

export async function insertPlyer(req, res) {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(400).json({ msg: "Missing 'name' in request body" });
        }
        const result = await addPlyer(name)
        console.log(result);
        res.json(result)
    } catch (err) {
        console.error("the err is: ", err.message)
        res.status(500).json({ msg: "Server error. Please try again later." })
    }
}

export async function putBastTime(req, res) {
    try {
        const { name, new_time } = req.body
        const user = await readOnePlayer(name)

        if (new_time <= user[0].bast_time)
            res.json({ msg: `the time old saved` });
        putPlayer(name, { bast_time: new_time })
        res.json({ msg: 'the bast time is: ', new_time })
    } catch (err) {
        console.log('err: ', err);
        res.status(500).json({ msg: 'Server error. Please try again later.' })
    }
}