import express from "express"

function loger(req, res, next){
    console.log(new Date(), req.url, req.method);
    next()
}

export{
    loger
}