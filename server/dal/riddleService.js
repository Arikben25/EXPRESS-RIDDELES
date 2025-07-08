const path = "http://localhost:3001"

// פונקציה האחרית לבקש מהשרת ולהחזיר את כל החידות

const allReddles = function readAllRiddles(){
    fetch(path,{
        method:"get",
        headers:{
            "Content-Type": "application/json"
        }
    }).then((res)=>console.log(res))
    .catch(req => console.log("err: ", req))
}
