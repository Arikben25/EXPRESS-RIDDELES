function getTime(func){
    const start = Date.now()
    func()
    const end = Date.now()
    return (end - start) / 1000
}

export{
    getTime
}