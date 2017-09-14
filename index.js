const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const Patient = require('./models/patient');

const authentication = require('./routes/authentication')(router);
const hospitalAdmin = require('./routes/hospitalAdmin')(router);
const branchAdmin = require('./routes/branchAdmin')(router);
const surgeon = require('./routes/surgeon')(router);

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
app.use('/branchAdmin',branchAdmin);
app.use('/surgeon',surgeon);

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
     cb(null, req.body.Name+req.body.Age+file.originalname);
  }
});

app.use('/uploads',express.static(path.join(__dirname, 'uploads'))); 

var upload = multer({ storage: storage });



app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
    if (!req.body.patientId) {
            res.json({ success: false, message: 'No patient Id was provided!' });
        }  else {
            req.body.patientId = mongoose.Types.ObjectId(req.body.patientId);
            Patient.findOne({ _id: req.body.patientId }, (err, patient) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid patient Id' });
                } else {
                    if (!patient) {
                        res.json({ success: false, message: 'patient Id was not found' });
                    } else {
                        const imageDetails = {
                            imagename: req.body.Imagename,
                            imagetype: req.body.Imagetype,
                            imagesize: req.body.Imagesize,
                            image: req.files[0].filename,
                            type:req.body.Type
                        };
                        patient.imageupload.push(imageDetails);
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient Updated!',data: patient.imageupload });
                            }
                        });
                    }
                }
            });
        }
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
