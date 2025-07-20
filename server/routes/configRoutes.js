import riddlesRouter from "./riddlesRoutes.js"

function configRoutes(app) {
    app.use("/reddles", riddlesRouter)
    //app.use("/players",plyerRouter)
    app.use((req, res) => {
        res.status(404).json({ msg: "Route not found." });
    })
}

export default configRoutes 