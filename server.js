var express = require('express');
app = express();
Task = require('./models/model-api');
mongoose = require('mongoose');
port = process.env.PORT ||1234;
bodyParser = require('body-parser');

//mongoose instance conn
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LatihanDB');

app.use(bodyParser.urlencoded({extended: true ,  useUnifiedTopology: true , useNewUrlParser: true }));
app.use(bodyParser.json());

var routes = require('./routes/route');
routes(app); //register the route

app.listen(port);
console.log('Server is runing on port : ' +port);