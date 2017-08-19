const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    hospitalName: { type: String, required: true, unique: true },
    hospitalAlias: { type: String, required: true, unique: true },
    hospitalType: { type: String, required: true, unique: true },
    hospitalAddress: { type: String, required: true, unique: true },    
    hospitalPhoneno:{type: Number,  required: true, unique: true},
    hospitalEmail: { type: String, required: true, unique: true },
    hospitalWebsite: { type: String, required: true, lowercase: true },
    noOfSurgeons:{type: Number , default: 0},
    noOfSupportStaffs:{type: Number , default: 0},
    hasBranch:{type: String , default: 'No'},
    noOfBranches:{type: Number , default: 0},    
    active:{type:Boolean , default:true},
    statusText:{type:String , default:'Activate'},
    branchDetails:[{        
        branchAlias:{type: String , required: true , unique: true},
        branchType:{type: String , required: true , unique: true},
        branchName:{type: String , required: true , unique: true},
        branchAddress:{type: String , required: true , unique: true},
        branchPhoneno:{type: Number,  required: true, unique: true},
        branchEmail: { type: String, required: true, unique: true },
        branchWebsite: { type: String, required: true, lowercase: true },
        noOfSurgeons:{type: Number , default: 0},
        noOfSupportStaffs:{type: Number , default: 0},
        active:{type:Boolean , default:true},
        statusText:{type:String , default:'Activate'}
    }]
},{collection:'hospital'});

module.exports = mongoose.model('hospital' , hospitalSchema);

