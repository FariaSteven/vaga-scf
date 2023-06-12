let data =  require("./fakeData");

module.exports = function(req, res){
    
    let name = req.query.name;
    let user = data.find(item => item.name === name);
    let count = user.count

    res.send(`Usuário ${name} foi lido ${count} vezes.`)

};
