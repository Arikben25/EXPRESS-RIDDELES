import rl from "readline-sync"
import { adminMenu } from "../menus/AdminMenu.js"
import { userMenu } from "../menus/UserMenu.js"

export async function createUsser() {
    const userName = rl.question('Please enter your username:\r\n ')
    const password = rl.question('Please create a password with a minimum length of 5 digits:\r\n ')// בדיקת אורך

    try {
        const res = await fetch("http://localhost:3000/players/insertPlayer", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({
                name: userName,
                password: password,
                UserType: "normal user"
            })
        })

        if (!res.ok) {
            throw new Error('you have a problem with respons');
        }
        console.log(`Hi ${userName}, you have successfully registered,
        To log in press 3`);
    } catch (err) {
        console.error('you have a problem with conected', err)
    }
}

export async function log_in() {
    const userName = rl.question('Please enter your username:\r\n ')
    const password = rl.question('Please enter your password :\r\n ')

    try {
        const res = await fetch('http://localhost:3000/players/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({
                name: userName,
                password: password
            })
        })
        const data = await res.json()

        if (res.status == 200 && data.UserType == "manager") {
            console.log(data.msg);
            await adminMenu(userName, 'manager')
        }
        else if (res.status == 200 && data.UserType == "normal user") {
            console.log(data.msg);
            await userMenu(userName, "normal user")
        }
    } catch (err) {
        console.error('err is ;', err)
    }

}

export async function putTime(userName ,newTime) {
    try {
        const res = await fetch('http://localhost:3000/players/apdateTime', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({
                name: userName,
                new_time: newTime
            })
        })
        const data =await res.json()
        console.log(data.msg);
    }catch(err){
        console.log('err is', err);
    }
}
