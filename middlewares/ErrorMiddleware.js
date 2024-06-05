const notFound = (req, res, next)=>{
    const error = new Error(`not found - ${req.OriginalUrl}`)
    res.status= 404
    next(error)
}

const errorMiddleware = (error, req, res, next)=>{
    if(res.headerSent){
        return next(error)
    }

    res.status(error.code || 500).json({message :error.message} || 'an unknown error occurred ');

}

module.exports = {notFound, errorMiddleware}


