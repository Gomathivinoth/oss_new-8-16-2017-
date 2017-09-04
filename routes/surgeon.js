const Hospital = require('../models/hospital'); // Import Hospital Model Schema
const User = require('../models/user');
const Patient = require('../models/patient');
const config = require('../config/database'); // Import database configuration
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports = (router) => {
    router.post('/surgeon_GetHospitalInfo', (req, res) => {
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch id provided' });
            } else {
                if (!req.body.surgeonId) {
                    res.json({ success: false, message: 'No surgeon id provided' });
                } else {
                    req.body.surgeonId = mongoose.Types.ObjectId(req.body.surgeonId);
                    User.findOne({ _id: req.body.surgeonId }, (err, surgeon) => {
                        if (err) {
                            res.json({ success: false, message: 'Not a valid surgeon Id' });
                        } else {
                            if (!surgeon) {
                                res.json({ success: false, message: 'No surgeon found!' });
                            } else {
                                req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
                                req.body.branchId = mongoose.Types.ObjectId(req.body.branchId);
                                Hospital.findOne({ _id: req.body.hospitalId }, (err, hospital) => {
                                    if (err) {
                                        res.json({ success: false, message: 'Not a valid hospital Id' });
                                    } else {
                                        if (!hospital) {
                                            res.json({ success: false, message: 'No hospital found!' });
                                        } else {
                                            for (let i = 0; i < hospital.branchDetails.length; i++) {
                                                if (req.body.branchId.equals(hospital.branchDetails[i]._id)) {
                                                    res.json({ success: true, message: hospital.branchDetails[i], data: hospital, data1: surgeon });
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                        }

                    });
                }
            }
        }

    });
    router.post('/surgeon_AddPatient', (req, res) => {
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch id provided' });
            } else {
                if (!req.body.surgeonId) {
                    res.json({ success: false, message: 'No surgeon id provided' });
                } else {
                    if (!req.body.uhid) {
                        res.json({ success: false, message: 'No uhid id provided' });
                    } else {
                        if (!req.body.uhid) {
                            res.json({ success: false, message: 'No study id provided' });
                        } else {
                            if (!req.body.firstname) {
                                res.json({ success: false, message: 'No patient firstname provided' });
                            } else {
                                if (!req.body.middlename) {
                                    res.json({ success: false, message: 'No patient middlename provided' });
                                } else {
                                    if (!req.body.lastname) {
                                        res.json({ success: false, message: 'No patient lastname provided' });
                                    } else {
                                        if (!req.body.dob) {
                                            res.json({ success: false, message: 'No patient dob provided' });
                                        } else {
                                            if (!req.body.age) {
                                                res.json({ success: false, message: 'No patient age provided' });
                                            } else {
                                                if (!req.body.gender) {
                                                    res.json({ success: false, message: 'No patient gender provided' });
                                                } else {
                                                    if (!req.body.height) {
                                                        res.json({ success: false, message: 'No patient height provided' });
                                                    } else {
                                                        if (!req.body.weight) {
                                                            res.json({ success: false, message: 'No patient weight provided' });
                                                        } else {
                                                            if (!req.body.bmi) {
                                                                res.json({ success: false, message: 'No patient bmi value provided' });
                                                            } else {
                                                                if (!req.body.address) {
                                                                    res.json({ success: false, message: 'No patient address provided' });
                                                                } else {
                                                                    if (!req.body.city) {
                                                                        res.json({ success: false, message: 'No patient city provided' });
                                                                    } else {
                                                                        if (!req.body.state) {
                                                                            res.json({ success: false, message: 'No patient state provided' });
                                                                        } else {
                                                                            if (!req.body.country) {
                                                                                res.json({ success: false, message: 'No patient country provided' });
                                                                            } else {
                                                                                if (!req.body.zipcode) {
                                                                                    res.json({ success: false, message: 'No patient zipcode provided' });
                                                                                } else {
                                                                                    if (!req.body.telephone) {
                                                                                        res.json({ success: false, message: 'No patient telephone provided' });
                                                                                    } else {
                                                                                        if (!req.body.phoneno) {
                                                                                            res.json({ success: false, message: 'No patient phoneno provided' });
                                                                                        } else {
                                                                                            if (!req.body.email) {
                                                                                                res.json({ success: false, message: 'No patient email provided' });
                                                                                            } else {
                                                                                                if (!req.body.type) {
                                                                                                    res.json({ success: false, message: 'No patient type provided' });
                                                                                                } else {
                                                                                                    const patientDetails = {
                                                                                                        hospitalId: req.body.hospitalId,
                                                                                                        branchId: req.body.branchId,
                                                                                                        surgeonId: req.body.surgeonId,
                                                                                                        uhid: req.body.uhid,
                                                                                                        studyid: req.body.studyid,
                                                                                                        firstname: req.body.firstname,
                                                                                                        middlename: req.body.middlename,
                                                                                                        lastname: req.body.lastname,
                                                                                                        dob: req.body.dob,
                                                                                                        age: req.body.age,
                                                                                                        gender: req.body.gender,
                                                                                                        height: req.body.height,
                                                                                                        weight: req.body.weight,
                                                                                                        bmi: req.body.bmi,
                                                                                                        address: req.body.address,
                                                                                                        city: req.body.city,
                                                                                                        state: req.body.state,
                                                                                                        country: req.body.country,
                                                                                                        zipcode: req.body.zipcode,
                                                                                                        telephoneno: req.body.telephoneno,
                                                                                                        phoneno: req.body.phoneno,
                                                                                                        email: req.body.email,
                                                                                                        side: req.body.side,
                                                                                                        bilateraltype: req.body.bilateraltype,
                                                                                                        combination: req.body.combination,
                                                                                                        type: req.body.type
                                                                                                    };

                                                                                                    const patient = new Patient({
                                                                                                        demography: patientDetails

                                                                                                    });
                                                                                                    patient.save((err) => {
                                                                                                        if (err) {
                                                                                                            res.json({ success: false, message: err });
                                                                                                        } else {
                                                                                                            res.json({ success: false, message: 'Surgeon added' });
                                                                                                        }
                                                                                                    });
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    });

    router.get('/surgeon_CountValue/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No hospital id was provided!!' });
        } else {
            Patient.find({ surgeonId: req.params.id }, (err, hospital) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid hospital id!!' });
                } else {
                    if (!hospital) {
                        res.json({ success: false, message: 'No hospital found' });
                    } else {
                        res.json({ success: true, message: hospital });
                    }
                }
            });
        }
    });

    router.get('/surgeon_GetLastPatientId', (req, res) => {
        Patient.find({}, (err, data) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {
                res.json({ success: true, message: data });
            }
        }).sort({ _id: -1 }).limit(1);

    });

    router.post('/surgeon_AddPatientPreoperative', (req, res) => {
        console.log(req.body);
        if (!req.body.patientId) {
            res.json({ success: false, message: 'No patient Id was provided!' });
        } else {
            req.body.patientId = mongoose.Types.ObjectId(req.body.patientId);
            Patient.findOne({ _id: req.body.patientId }, (err, patient) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid patient Id' });
                } else {
                    if (!patient) {
                        res.json({ success: false, message: 'patient Id was not found' });
                    } else {
                        // patient.preoperative.push({
                        const preoperativeDetails = {
                            surgerydate: req.body.surgerydate,
                            surgeonname: req.body.surgeonname,
                            etiology: req.body.etiology,
                            valgus: req.body.valgus,
                            varus: req.body.varus,
                            flexion: req.body.flexion,
                            joint: req.body.joint,
                            symptoms: req.body.symptoms
                        };
                        patient.preoperative = preoperativeDetails;
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });

    router.post('/surgeon_AddPatientRadiology', (req, res) => {
        if (!req.body.patientId) {
            res.json({ success: false, message: 'No patient Id was provided!' });
        } else {
            req.body.patientId = mongoose.Types.ObjectId(req.body.patientId);
            Patient.findOne({ _id: req.body.patientId }, (err, patient) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid patient Id' });
                } else {
                    if (!patient) {
                        res.json({ success: false, message: 'patient Id was not found' });
                    } else {
                        // patient.preoperative.push({
                        const radiologyDetails = {
                            implantsitu: req.body.implantsitu,
                            rad_valgus: req.body.rad_valgus,
                            rad_varus: req.body.rad_varus,
                            rad_patella: req.body.rad_patella,
                            rad_stressfracture: req.body.rad_stressfracture,
                            rad_vcaangle: req.body.rad_vcaangle,
                            rad_availabilityct: req.body.rad_availabilityct,
                            rad_availabilitymri: req.body.rad_availabilitymri,
                            rad_filename: req.body.rad_filename,
                            rad_filetype: req.body.rad_filetype,
                            rad_vitaminD: req.body.rad_vitaminD,
                            rad_vitaminB12: req.body.rad_vitaminB12
                        };
                        patient.radiology = radiologyDetails;
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });


    router.post('/surgeon_AddPatientIntraoperative', (req, res) => {
        if (!req.body.patientId) {
            res.json({ success: false, message: 'No patient Id was provided!' });
        } else {
            req.body.patientId = mongoose.Types.ObjectId(req.body.patientId);
            Patient.findOne({ _id: req.body.patientId }, (err, patient) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid patient Id' });
                } else {
                    if (!patient) {
                        res.json({ success: false, message: 'patient Id was not found' });
                    } else {
                        // patient.preoperative.push({
                        const intraoperativeDetails = {
                            intra_procedure: req.body.intra_procedure,
                            intra_navigation: req.body.intra_navigation,
                            intra_drapes: req.body.intra_drapes,
                            intra_hoods: req.body.intra_hoods,
                            intra_prophylactic: req.body.intra_prophylactic,
                            intra_tranexamicoption: req.body.intra_tranexamicoption,
                            intra_anaesthesia: req.body.intra_anaesthesia,
                            intra_grade: req.body.intra_grade,
                            intra_tourniquet: req.body.intra_tourniquet,
                            intra_tourniquetpressure: req.body.intra_tourniquetpressure,
                            intra_arthrotomy: req.body.intra_arthrotomy,
                            intra_tibialdefect: req.body.intra_tibialdefect,
                            intra_aoriclassification: req.body.intra_aoriclassification,
                            intra_patellaouterbridgeclassification: req.body.intra_patellaouterbridgeclassification,
                            intra_patellarthickness: req.body.intra_patellarthickness,
                            intra_acl: req.body.intra_acl,
                            intra_pcl: req.body.intra_pcl,
                            intra_mcl: req.body.intra_mcl,
                            intra_lcl: req.body.intra_lcl,
                            intra_varus: req.body.intra_varus,
                            intra_valgus: req.body.intra_valgus,
                            intra_flexion: req.body.intra_flexion
                        };
                        patient.intraoperative = intraoperativeDetails;
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });

      router.post('/surgeon_AddPatientPostoperative', (req, res) => {
        if (!req.body.patientId) {
            res.json({ success: false, message: 'No patient Id was provided!' });
        } else {
            req.body.patientId = mongoose.Types.ObjectId(req.body.patientId);
            Patient.findOne({ _id: req.body.patientId }, (err, patient) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid patient Id' });
                } else {
                    if (!patient) {
                        res.json({ success: false, message: 'patient Id was not found' });
                    } else {
                        // patient.preoperative.push({
                        const postoperativeDetails = {
                            post_date: req.body.post_date,
                            post_side: req.body.post_side,
                            post_posteriorslope: req.body.post_posteriorslope,
                            post_hipkneeankle: req.body.post_hipkneeankle,
                            post_filename: req.body.post_filename, 
                            post_filetype: req.body.post_filetype                           
                        };
                        patient.postoperative.push(postoperativeDetails);
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });



    return router;
}
