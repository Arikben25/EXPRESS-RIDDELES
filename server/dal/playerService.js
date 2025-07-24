import { supabase } from "../DBconfig/supaBase.js"
const tableName = 'plyer_riddles'

//A function that returns all users from db
export async function readPlyers() {
    const { data, error } = await supabase
        .from(tableName)
        .select('*')
    if (error) {
        console.error('err is: ', error)
        throw new Error('Could not retrieve plyers from the database')
    }
    return data
}

//A function that returns one user from db
export async function readOnePlayer(userName) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .eq("name", userName)
        if (error) {
            console.error('err is: ', error)
            throw new Error('Could not retrieve plyers from the database')
        }
        return data
    } catch (err) {
        console.error('without success')
    }
}

//A function that inserts a new user to db
export async function addPlyer(name) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .insert([
                {
                    name: name,
                    bast_time: 0
                }],
                {
                    returning: "representation"
                }
            ).select("*")
        if (error) {
            console.log(`err is:`, error);
            throw new Error('Could not insert plyer to database ')
        }
        return data
    } catch (err) {
        console.log("err is : ", err);
        throw err
    }
}

//A function that updates a user

export async function putPlayer(userName, obj) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .update(obj)
            .eq('name', userName)
            .select('*')

        if (error) {
            throw new Error('The new time was not updated in the table.')
        }
        console.log(data);
        return data;
    } catch (err) {
        console.error('yor problme is: ', err)
    }
}