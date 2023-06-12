let data = require("./fakeData");
let permissions = require("./teste6");

module.exports = function (req, res) {
    let name = req.query.name;
    let user = data.find(item => item.name === name);
    let getPermissions = permissions.getRoles(user);

    if (user && getPermissions) {
        data.splice(data.indexOf(user), 1);
    } else {
        if(!getPermissions) {
            res.status(403).send('Você não tem permissão para atualizar este usuário.')
        };
    };

    res.send("success");

};