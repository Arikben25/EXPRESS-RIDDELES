import http from "http"
const port = 3002

// יצירת שרת
const server = http.createServer((req,res)=>{
    console.log("url: ",req.url);
    console.log("method: ",req.method);
    console.log("haders: ",req.headers);

    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end(`Hi from your serves`)
})


server.listen(port,()=>console.log(`th serves is on in port `,port))