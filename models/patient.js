const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    demography: {
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
    },
    preoperative: {
        surgerydate: { type: String },
        surgeonname: { type: String },
        etiology: { type: String },
        valgus: { type: String },
        varus: { type: String },
        flexion: { type: String },
        joint: [{
            otherJoint: { type: String },
            selected: { type: Boolean, default: false }
        }],
        symptoms: [{
            symptomsName: { type: String },
            selected: { type: Boolean, default: false }
        }]
    },
    radiology: {
        implantsitu: [{
            implantsituName: { type: String },
            selected: { type: Boolean, default: false }
        }],
        rad_valgus: { type: String },
        rad_varus: { type: String },
        rad_patella: { type: String },
        rad_stressfracture: [{
            stressfractureName: { type: String },
            selected: { type: Boolean, default: false }
        }],
        rad_vcaangle: { type: String },
        rad_availabilityct: { type: String },
        rad_availabilitymri: { type: String },
        rad_filename: { type: String },
        rad_filetype: { type: String },
        rad_vitaminD: { type: String },
        rad_vitaminB12: { type: String }
    },
    intraoperative: {
        intra_procedure: { type: String },
        intra_navigation: { type: String },
        intra_drapes: { type: String },
        intra_hoods: { type: String },
        intra_prophylactic: { type: String },
        intra_tranexamicoption: { type: String },
        intra_anaesthesia: [{
            anaesthesiaName: { type: String },
            selected: { type: Boolean, default: false }
        }],
        intra_grade: { type: String },
        intra_tourniquet: { type: String },
        intra_tourniquetpressure: { type: String },
        intra_arthrotomy: { type: String },
        intra_tibialdefect: { type: String },
        intra_aoriclassification: { type: String },
        intra_patellaouterbridgeclassification: { type: String },
        intra_patellarthickness: { type: String },
        intra_acl: { type: String },
        intra_pcl: { type: String },
        intra_mcl: { type: String },
        intra_lcl: { type: String },
        intra_varus: [{
            varusName: { type: String },
            selected: { type: Boolean, default: false }
        }],
        intra_valgus: [{
            valgusName: { type: String },
            selected: { type: Boolean, default: false }
        }],
        intra_flexion: [{
            flexionName: { type: String },
            selected: { type: Boolean, default: false }
        }]
    },
    postoperative: [{
        post_date: { type: String },
        post_side: { type: String },
        post_posteriorslope: { type: String },
        post_hipkneeankle: { type: String },
        post_filename: { type: String },
        post_filetype: { type: String }
    }],
    postoperativescores: [{

    }]

}, { collection: 'patient' });

module.exports = mongoose.model('patient', patientSchema);