const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    hospitalId: { type: String },
    branchId: { type: String },
    surgeonId: { type: String },
    name: { type: String },
    gender: { type: String },
    email: { type: String },
    phoneno: { type: Number },
    technicalno: { type: Number },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    usertype: { type: String },
    regno: { type: String },
    city: { type: String },
    country: { type: String },
    fileName: { type: String },
    filetype: { type: String },
    active: { type: Boolean, default: false },
    statusText: { type: String, default: 'Activate' }
}, { collection: 'user' });

module.exports = mongoose.model('user', userSchema);