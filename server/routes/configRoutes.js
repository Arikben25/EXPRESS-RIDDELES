import reddelRouter from "./riddlesRoutes.js"

function configRoutes(app) {
    app.use("/reddles", reddelRouter)
    //app.use("/players",plyerRouter)
    app.use((req, res) => {
        res.status(404).json({ msg: "Route not found." });
    })
}

export default configRoutes