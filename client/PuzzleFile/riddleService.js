import { error } from "console";

// function thet get all riddles
async function getAllRiddles(){
    try{
        const res = await fetch("http://localhost:3008/reddles")
    
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

//function thet add riddle 

async function createNewRiddle(params) {
    
}



export {
    getAllRiddles,
    createNewRiddle
}