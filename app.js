let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let controller = require('./controllers/userController');
const { permission } = require('./middlewares/permission');

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", controller.getUser);
app.get("/users", controller.getUsers);
app.post("/users", controller.createUser);
app.delete("/users", permission(), controller.deleteUser);
app.put("/users", permission() ,controller.updateUser);
app.get("/users/access", controller.countUserRead);


const port = 3000;
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});