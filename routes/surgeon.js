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
                                                                                                    const patient = new Patient({
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

    //  router.get('/surgeon_GetLastPatientId', (req, res) => {
    //     const data = Patient.find({},{ _id: -1 }).sort({_id:-1}).limit(1);
    //     res.json({ success: true, message: data });

    //     // Patient.find({}, (err, data) => {
    //     //     if (err) {
    //     //         res.json({ success: false, message: err });
    //     //     } else {
    //     //         res.json({ success: true, message: data });
    //     //     }
    //     // },sort({_id:-1}).limit(1));

    // });
    return router;
}
