
export function logger(req, res, next) {
    console.log(new Date(), req.url, req.method);
    next()
}