let data =  require("./fakeData");

module.exports = function(req, res){
    let lastIndex = data.length - 1;
    
    let newUser = {
        id : data[lastIndex].id + 1,
        name: req.body.name,
        job: req.body.job,
        role: req.body.role,
        count: 0
    };

    data.push(newUser);
    
    res.status(201).send(newUser);

};