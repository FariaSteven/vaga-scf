let data = require("../fakeData");

const getUser = (req, res, next) => {
    let name = req.query.name;
    let findByName = data.find(item => item.name === name);

    if (findByName) {
        res.send(findByName);
        findByName.count++
    } else {
        res.status(404).send('Usúario não encontrado')
    }
};

const getUsers = (req, res, next) => {
    res.send(data);
};

const createUser = (req, res) => {
    let lastIndex = data.length - 1;
    let newUser = {
        id: data[lastIndex].id + 1,
        name: req.body.name,
        job: req.body.job,
        role: req.body.role,
        count: 0
    };

    data.push(newUser);

    res.status(201).send(newUser);
};

const deleteUser = (req, res, next) => {
    let name = req.query.name;
    let user = data.find(item => item.name === name);

    if (user) {
        data.splice(data.indexOf(user), 1);
        res.send("Usuário deletado com sucesso.");
    } else {
        res.status(404).send('Usuário não encontrado.')
    }
};

const updateUser = (req, res, next) => {
    let id = req.query.id;
    let user = data.find(item => item.id == id);

    if (user) {
        user.name = req.body.name;
        user.job = req.body.job;
        user.role = req.body.role;
        res.status(200).send('Usuário atualizado com sucesso.')
        next();
    } else {
        res.status(404).send('Usuário não encontrado.')
    }

    res.send(user);
};

const countUserRead = (req, res, next) => {
    let name = req.query.name;
    let user = data.find(item => item.name === name);
    let count = user.count

    res.send(`Usuário ${name} foi lido ${count} vezes.`)
};

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    countUserRead
}