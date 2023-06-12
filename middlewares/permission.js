const permission = () => {
    return (req, res, next) => {
        const userRole = req.headers.role;
        if (userRole == "admin") {
            next();
        } else {
            return res.status(401).send("Você não tem permissão para essa função.");
        }
    }
}

module.exports = { permission }