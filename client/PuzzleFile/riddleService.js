import { error } from "console";

async function getAllRiddles(){
    try{
        const res = await fetch("http://localhost:3000/reddels")
    if(!res.ok){
        throw new Error("you have a problem with data");   
    }
    else{
        const data = await res.json()
    console.log(data);
        return data
    }
    }catch(err){
        console.error(`error: ${err}`);
        return err
    }   
}



export default{
    getAllRiddles
}