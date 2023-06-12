let data =  require("./fakeData");
let permissions = require("./teste6");

module.exports = function(req, res) {
    let id = req.query.id;
    let user = data.find(item => item.id == id);
    let getPermissions = permissions.getRoles(user);

    if(user && getPermissions) {
        user.name = req.body.name;
        user.job = req.body.job;
        user.role = req.body.role;
    } else {
        if(!getPermissions) {
            res.status(403).send('Você não tem permissão para atualizar este usuário.')
        }
        res.status(404).send('Usuário não encontrado.')
    }
    
    res.send(user);
};