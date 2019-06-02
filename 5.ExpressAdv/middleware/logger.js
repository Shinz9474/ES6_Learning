const authenticate = function authenticate(req, res, next){
    console.log("Authenticating....")
    next();
}

const log = function log(req, res, next){
    console.log("Logging...")
    next();
}

module.exports = {
    authenticate,
    log
}