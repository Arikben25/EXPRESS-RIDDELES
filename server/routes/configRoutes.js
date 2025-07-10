import reddelRouter from "./riddlesRoutes.js"
// import express from "express"
// const app = express()


function configRoutes(app){
    app.use("/reddels",reddelRouter)
    //app.use("/plyers",plyerRouter)
    app.use((req, res)=>{
        res.status(404).json({msg: "Route not found."});
    })
}

export default configRoutes