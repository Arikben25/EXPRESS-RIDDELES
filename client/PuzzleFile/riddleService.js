import { error } from "console";
import rl from "readline-sync"

// function thet get all riddles
async function getAllRiddles(){
    try{
        const res = await fetch("http://localhost:3000/reddles")
    
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

async function createNewRiddle() {
    const name = rl.question("What is the name of the riddle? ")
    const question = rl.question("Please enter the riddle: ")
    const answer = rl.question("Please enter the answer: ")

    try{
        const res = await fetch("http://localhost:3000/reddles",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            name:name,
            question:question,
            answer:answer
            })
        })
        if(!res){
            throw new Error('you have a problem with respons');
        }
        console.log(`The puzzle was added successfully :)`);
        return res

    }catch(erorr){
        console.error('you have a problem with conected')
    }
}

///To edit a puzzle press
//////////////////////////
///To delete a puzzle press
/////////////////////////


export {
    getAllRiddles,
    createNewRiddle
}
