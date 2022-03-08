const errorHandler = (err, req, res, next) => {
    switch(err.name) {
        case "BadRequest":
            res.status(400).json({error: err.error});
            break;
        case "Unauthorized":
            res.status(401).json({error: err.error});
            break;
        case "Forbidden":
            res.status(403).json({error: err.error});
            break;
        case "NotFound":
            res.status(404).json({error: err.error});
            break;
        default:
            res.status(500).json({
                error: "Internal Server Error"
            });
            break;
    }
}
module.exports = errorHandler