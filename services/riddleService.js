// import fs from "fs"
// const pata = "./riddles.js"
// // פןנקציה הקוראת את ומחזירה מערך עם כל החידות

// function readAllRiddles(pata){

//     fs.readFile(pata,"utf-8",(err,data)=>{})
// }



//  async function ficher(){
//     try{
//        const fet = await fetch("https://jsonplaceholder.typicode.com/posts")
//        const data = await fet.json()
//        console.log(data)
//     }catch(err){
//         console.log(err);
//         console.log(`aaaaaaaaaa`);
//     }
// }
// ficher()

// fetch('https://api-kodkod.onrender.com/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
   
//   },
//   body: JSON.stringify({
//     name: 'nisim',
//     job: 'student'
//   })
// })
//   .then(res => res.json())
//   .then(data => console.log(data));
const obj = {
        name: "arik",
        type: "man"
}

post("https://jsonplaceholder.typicode.com/posts",obj)


async function post(path,dataJeson){
    fetch(path,{
    method:"post",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify(dataJeson)
}) .then(res => res.json())
   .then(data => console.log(data));
}





