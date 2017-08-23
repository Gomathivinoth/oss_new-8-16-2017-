const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');

const authentication = require('./routes/authentication')(router);
const hospitalAdmin = require('./routes/hospitalAdmin')(router);

const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri , (err) => {
    if(err){
        console.log('COULD NOT connect to my database '+ err);
    } else {
        console.log('Connected to database ' + config.db);
    }
});

app.use(express.static(path.join(__dirname, 'uploads')));

// para CORN
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({
    origin : 'http://localhost:4200'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/authentication',authentication);
app.use('/hospitalAdmin',hospitalAdmin);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  // renombrar fichero
  filename: function (req, file, cb) {
    var dt = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    cb(null,dt+'-'+file.originalname);
  }
});

var upload = multer({ storage: storage });

app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
  console.log('files', req.files);
  res.send(req.files);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
