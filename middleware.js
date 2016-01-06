module.exports = {
    requireAuthentication: function(req,res, next) {
        console.log("Private route hit!");
        next();
    },
    logger: function(req,res,next) {
        var date = new Date().toString();
        console.log("%s %s %s", date, req.method, req.originalUrl);
        next();
    },
};