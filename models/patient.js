const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    hospitalId: { type: String },
    branchId: { type: String },
    surgeonId: { type: String },
    uhid: { type: String },
    studyid: { type: String },
    firstname: { type: String },
    middlename: { type: String },
    lastname: { type: String },
    dob: { type: String },
    age: { type: String },
    gender: { type: String },
    height: { type: String },
    weight: { type: String },
    bmi: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipcode: { type: String },
    telephoneno: { type: Number },    
    phoneno: { type: Number },
    email: { type: String },
    side: { type: String },
    bilateraltype: { type: String },
    combination: { type: String },
    type: { type: String }
}, { collection: 'patient' });

module.exports = mongoose.model('patient', patientSchema);