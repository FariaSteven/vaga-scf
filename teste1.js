let data = require("./fakeData");

const getUser = (req, res, next) => {
    let name = req.query.name;
    let findByName = data.find(item => item.name === name);

    if (findByName) {
        res.send(findByName);
        findByName.count ++
    } else {
        res.status(404).send('Usúario não encontrado')
    }
};

const getUsers = (req, res, next) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};