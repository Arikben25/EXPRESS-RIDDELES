import {connect} from "../DBconfig/mongoDB.js"
const db = await connect()


// read all riddles function 

export async function readAllReaddles() {
    try{
       const data = await db.collection("dataBaseDefolt").find().toArray()
        console.log(data);
        return data
    }catch(err){
        console.log(`your err is: ${err}`);
        return err
    }
}

// add riddle to db 

export async function addOneRiddle(obj){
    try{
       const resolt = await db.collection("dataBaseDefol")
       .insertOne(obj)
       console.log(resolt);
       return resolt;
    }catch(err){
        console.error("yuor problme is: ",err)
        return err
    }
}


// put riddle by id 
export async function putRiddle(num,obj) {
    try{
        const data = await db.collection("dataBaseDefol").updateOne(
        {num:num},{$set:obj},{upsert:true})
        console.log('data', data);
        return data.insertOne
    }catch(err){
        console.error('you havh a problem :',err)
        return err
    }
}
 
// delet riddle by id

async function  delRiddle(num) {
    try{
        const data = await db.collection("dataBaseDefol")
        .deleteOne({num:num})
        console.log(data);
        return data.deletedCount
    }catch(err){
        console.error('err is: ',err)
    }
}

async function addManyRiddles(obj) {
    try{
        const resolt =await db.collection("dataBaseDefol")
    .insertMany(obj)
    console.log(resolt);
    return resolt
    }catch(err){
        console.error(" err is :",err)
    }
}