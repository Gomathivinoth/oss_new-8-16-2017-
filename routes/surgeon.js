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
        console.log(req.params.id);
        if (!req.params.id) {
            res.json({ success: false, message: 'No hospital id was provided!!' });
        } else {
            Patient.find({}, (err, hospital) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid hospital id!!' });
                } else {
                    if (!hospital) {
                        res.json({ success: false, message: 'No hospital found' });
                    } else {
                        res.json({ success: true, message: hospital });
                    }
                }
            }).count();
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

     router.get('/surgeon_SinglePatientId/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No patient id was provided!!' });
        } else {
            Patient.findOne({ _id: req.params.id }, (err, patient) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid patient id!!' });
                } else {
                    if (!patient) {
                        res.json({ success: false, message: 'No patient found' });
                    } else {
                        res.json({ success: true, message: patient });
                    }
                }
            });
        }

    });

    router.post('/surgeon_AddPatientPreoperative', (req, res) => {
        //console.log(req.body);
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
                            etiologyothername: req.body.etiologyothername,
                            valgus: req.body.valgus,
                            varus: req.body.varus,
                            flexion: req.body.flexion,
                            joint: req.body.joint,
                            symptoms: req.body.symptoms,
                            onsetsymptom: req.body.onsetsymptom,
                            noyear: req.body.noyear,
                            symptomaggravated: req.body.symptomaggravated,
                            Comorbidities: req.body.Comorbidities,
                            Previouskneesurgeries: req.body.Previouskneesurgeries,
                            steroid: req.body.steroid,
                            viscosupplement: req.body.viscosupplement,
                            flexiondeformity: req.body.flexiondeformity,
                            hyperextension: req.body.hyperextension,
                            retropatellar: req.body.retropatellar,
                            patellartracking: req.body.patellartracking,
                            quadricepspower: req.body.quadricepspower,
                            diagnosis: req.body.diagnosis,
                            diagnosisothername: req.body.diagnosisothername,
                            causerevision: req.body.causerevision,
                            prostheticType: req.body.prostheticType,
                            precompany: req.body.precompany,
                            predesign: req.body.predesign,
                            indexsurgery: req.body.indexsurgery,
                            revisionsurgeries: req.body.revisionsurgeries,
                            previouskneesurgery: req.body.previouskneesurgery,
                            painrest: req.body.painrest,
                            previousscar: req.body.previousscar,
                            sinustract: req.body.sinustract,
                            previousflaps: req.body.previousflaps
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

    router.post('/surgeon_AddkneeRevisionPreoperative', (req, res) => {
        //console.log(req.body);
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
                            diagnosis: req.body.diagnosis,
                            diagnosisothername: req.body.diagnosisothername,
                            causerevision: req.body.causerevision,
                            prostheticType: req.body.prostheticType,
                            precompany: req.body.precompany,
                            predesign: req.body.predesign,
                            indexsurgery: req.body.indexsurgery,
                            revisionsurgeries: req.body.revisionsurgeries,
                            previouskneesurgery: req.body.previouskneesurgery,
                            symptoms: req.body.symptoms,
                            painrest: req.body.painrest,
                            Comorbidities: req.body.Comorbidities,
                            previousscar: req.body.previousscar,
                            sinustract: req.body.sinustract,
                            previousflaps: req.body.previousflaps,
                            retropatellar: req.body.retropatellar,
                            patellartracking: req.body.patellartracking,
                            quadricepspower: req.body.quadricepspower
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


    router.post('/deleteImage', (req, res) => {
        console.log(req.body);
        if (!req.body.patientId) {
            res.json({ success: false, message: 'No patient id provided' });
        } else {
            if (!req.body.imageId) {
                res.json({ success: false, message: 'No image id provided' });
            } else {
                //res.json({ success: false, message: 'No provided' });
                req.body.patientId = mongoose.Types.ObjectId(req.body.patientId);
                req.body.imageId = mongoose.Types.ObjectId(req.body.imageId);
                Patient.findOne({ _id: req.body.patientId }, (err, patient) => {
                    if (err) {
                        res.json({ success: false, message: 'Not a valid patient Id' });
                    } else {
                        if (!patient) {
                            res.json({ success: false, message: 'No patient found!' });
                        } else {
                            for (let i = 0; i < patient.imageupload.length; i++) {
                                if (req.body.imageId.equals(patient.imageupload[i]._id)) {
                                    patient.imageupload.splice(i, 1);
                                    patient.save((err) => {
                                        if (err) {
                                            res.json({ success: false, message: err });
                                        } else {
                                            res.json({ success: true, message: 'image deleted', data: patient.imageupload });
                                        }
                                    });
                                }
                            }
                        }
                    }
                });

            }
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

    router.post('/surgeon_AddPatientRevisionRadiology', (req, res) => {
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
                            rad_patella: req.body.rad_patella,
                            rad_femoralcomponent: req.body.rad_femoralcomponent,
                            rad_tibialcomponent: req.body.rad_tibialcomponent,
                            rad_femoralrotation: req.body.rad_femoralrotation,
                            rad_tibialrotation: req.body.rad_tibialrotation,
                            rad_availablemrict: req.body.rad_availablemrict,
                            rad_esr: req.body.rad_esr,
                            rad_crp: req.body.rad_crp,
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
                            intra_flexion: req.body.intra_flexion,
                            intra_distalfemoral: req.body.intra_distalfemoral,
                            intra_resurfacing: req.body.intra_resurfacing,
                            intra_reconstruction: req.body.intra_reconstruction,
                            intra_femoralstem: req.body.intra_femoralstem,
                            intra_stem: req.body.intra_stem,
                            intra_tibialstem: req.body.intra_tibialstem,
                            intra_tstem: req.body.intra_tstem,
                            intra_cement: req.body.intra_cement,
                            intra_antibiotic: req.body.intra_antibiotic,
                            intra_viscosity: req.body.intra_viscosity,
                            intra_cocktail: req.body.intra_cocktail,
                            intra_complications: req.body.intra_complications,
                            intra_complicationdetail: req.body.intra_complicationdetail,
                            intra_company: req.body.intra_company,
                            intra_design: req.body.intra_design,
                            intra_femoralSize: req.body.intra_femoralSize,
                            intra_tibialSize: req.body.intra_tibialSize,
                            intra_patellarSize: req.body.intra_patellarSize,
                            intra_insertPoly: req.body.intra_insertPoly,
                            intra_componentStability: req.body.intra_componentStability,
                            intra_contracture: req.body.intra_contracture,
                            intra_hyperextension: req.body.intra_hyperextension,
                            intra_medialLaxity: req.body.intra_medialLaxity,
                            intra_patellarTracking: req.body.intra_patellarTracking,
                            intra_operativehour: req.body.intra_operativehour,
                            intra_operativeminute: req.body.intra_operativeminute
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

     router.post('/surgeon_AddPatientRevisionPostoperative', (req, res) => {
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
                            post_notes: req.body.post_notes,
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

    router.post('/surgeon_Patientkneescoure', (req, res) => {
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
                        const kneescoreDetails = {
                            kneescore_walking: req.body.kneescore_walking,
                            kneescore_stairs: req.body.kneescore_stairs,
                            kneescore_point: req.body.kneescore_point,
                            kneescore_lateral: req.body.kneescore_lateral,
                            kneescore_posterior: req.body.kneescore_posterior,
                            kneescore_extension: req.body.kneescore_extension,
                            kneescore_flexion: req.body.kneescore_flexion,
                            kneescore_malalignment: req.body.kneescore_malalignment,
                            kneescore_rest: req.body.kneescore_rest,
                            totalkneescore: req.body.totalkneescore,
                            kneescore_functionwalk: req.body.kneescore_functionwalk,
                            kneescore_functionstairs: req.body.kneescore_functionstairs,
                            kneescore_functiondeductions: req.body.kneescore_functiondeductions,
                            totalfunctionscore: req.body.totalfunctionscore
                        };
                        patient.preoperative.prekneescore = kneescoreDetails;
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient score Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });
    router.post('/surgeon_PatientPostkneescoure', (req, res) => {
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
                        const postkneescoreDetails = {
                            kneescore_walking: req.body.kneescore_walking,
                            kneescore_stairs: req.body.kneescore_stairs,
                            kneescore_point: req.body.kneescore_point,
                            kneescore_lateral: req.body.kneescore_lateral,
                            kneescore_posterior: req.body.kneescore_posterior,
                            kneescore_extension: req.body.kneescore_extension,
                            kneescore_flexion: req.body.kneescore_flexion,
                            kneescore_malalignment: req.body.kneescore_malalignment,
                            kneescore_rest: req.body.kneescore_rest,
                            totalkneescore: req.body.totalkneescore,
                            kneescore_functionwalk: req.body.kneescore_functionwalk,
                            kneescore_functionstairs: req.body.kneescore_functionstairs,
                            kneescore_functiondeductions: req.body.kneescore_functiondeductions,
                            totalfunctionscore: req.body.totalfunctionscore
                        };
                        patient.postoperativescores.postkneescore = postkneescoreDetails;
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient score Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });

    router.post('/surgeon_Patientwomacscoure', (req, res) => {
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
                        const womacscoreDetails = {
                            womac_walking: req.body.womac_walking,
                            womac_Stair: req.body.womac_Stair,
                            womac_nocturnal: req.body.womac_nocturnal,
                            womac_rest: req.body.womac_rest,
                            womac_weight: req.body.womac_weight,
                            womac_stiffness: req.body.womac_stiffness,
                            womac_stiffnessoccurring: req.body.womac_stiffnessoccurring,
                            womac_descendingstairs: req.body.womac_descendingstairs,
                            womac_ascendingstairs: req.body.womac_ascendingstairs,
                            womac_rising: req.body.womac_rising,
                            womac_standing: req.body.womac_standing,
                            womac_bending: req.body.womac_bending,
                            womac_surface: req.body.womac_surface,
                            womac_gettingcar: req.body.womac_gettingcar,
                            womac_shopping: req.body.womac_shopping,
                            womac_puttingsocks: req.body.womac_puttingsocks,
                            womac_lying: req.body.womac_lying,
                            womac_takingsocks: req.body.womac_takingsocks,
                            womac_risingbed: req.body.womac_risingbed,
                            womac_gettingbath: req.body.womac_gettingbath,
                            womac_sitting: req.body.womac_sitting,
                            womac_gettingon: req.body.womac_gettingon,
                            womac_domestic: req.body.womac_domestic,
                            womac_lightdomestic: req.body.womac_lightdomestic,
                            totaldivide: req.body.totaldivide,
                            totalwomacscore: req.body.totalwomacscore
                        };
                        patient.preoperative.prewomacscore = womacscoreDetails;
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient score Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });

    router.post('/surgeon_Patientsf36scoure', (req, res) => {
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
                        const sf36scoreDetails = {
                            sf36_generalhealth: req.body.sf36_generalhealth,
                            generalhealth: req.body.generalhealth,
                            sf36_ratehealth: req.body.sf36_ratehealth,
                            ratehealth: req.body.ratehealth,
                            sf36_vigorous: req.body.sf36_vigorous,
                            vigorous: req.body.vigorous,
                            sf36_moderate: req.body.sf36_moderate,
                            moderate: req.body.moderate,
                            sf36_lifting: req.body.sf36_lifting,
                            lifting: req.body.lifting,
                            sf36_severalflights: req.body.sf36_severalflights,
                            severalflights: req.body.severallights,
                            sf36_oneflights: req.body.sf36_oneflights,
                            oneflights: req.body.oneflights,
                            sf36_bending: req.body.sf36_bending,
                            bending: req.body.bending,
                            sf36_walking: req.body.sf36_walking,
                            walking: req.body.walking,
                            sf36_severalblocks: req.body.sf36_severalblocks,
                            severalblocks: req.body.severalblocks,
                            sf36_oneblock: req.body.sf36_oneblock,
                            oneblock: req.body.oneblock,
                            sf36_dressing: req.body.sf36_dressing,
                            dressing: req.body.dressing,
                            sf36_spentactivities: req.body.sf36_spentactivities,
                            spentactivities: req.body.spentactivities,
                            sf36_accomplished: req.body.sf36_accomplished,
                            accomplished: req.body.accomplished,
                            sf36_workactivities: req.body.sf36_workactivities,
                            workactivities: req.body.workactivities,
                            sf36_performing: req.body.sf36_performing,
                            performing: req.body.performing,
                            sf36_spentwork: req.body.sf36_spentwork,
                            spentwork: req.body.spentwork,
                            sf36_accomplishedless: req.body.sf36_accomplishedless,
                            accomplishedless: req.body.accomplishedless,
                            sf36_carefully: req.body.sf36_carefully,
                            carefully: req.body.carefully,
                            sf36_socialactivities: req.body.sf36_socialactivities,
                            socialactivities: req.body.socialactivities,
                            sf36_bodilypain: req.body.sf36_bodilypain,
                            bodilypain: req.body.bodilypain,
                            sf36_paininterfere: req.body.sf36_paininterfere,
                            paininterfere: req.body.paininterfere,
                            sf36_feelfull: req.body.sf36_feelfull,
                            feelfull: req.body.feelfull,
                            sf36_nervous: req.body.sf36_nervous,
                            nervous: req.body.nervous,
                            sf36_dumps: req.body.sf36_dumps,
                            dumps: req.body.dumps,
                            sf36_calm: req.body.sf36_calm,
                            calm: req.body.calm,
                            sf36_energy: req.body.sf36_energy,
                            energy: req.body.energy,
                            sf36_downhearted: req.body.sf36_downhearted,
                            downhearted: req.body.downhearted,
                            sf36_feelworn: req.body.sf36_feelworn,
                            feelworn: req.body.feelworn,
                            sf36_happyperson: req.body.sf36_happyperson,
                            happyperson: req.body.happyperson,
                            sf36_feeltired: req.body.sf36_feeltired,
                            feeltired: req.body.feeltired,
                            sf36_physicalhealth: req.body.sf36_physicalhealth,
                            physicalhealth: req.body.physicalhealth,
                            sf36_sick: req.body.sf36_sick,
                            sick: req.body.sick,
                            sf36_healthy: req.body.sf36_healthy,
                            healthy: req.body.healthy,
                            sf36_getworse: req.body.sf36_getworse,
                            getworse: req.body.getworse,
                            sf36_excellent: req.body.sf36_excellent,
                            excellent: req.body.excellent,
                            sf36_physicalscore: req.body.totalsf36score,
                            sf36_rolelimitation: req.body.sf36_rolelimitation,
                            sf36_emotional: req.body.sf36_emotional,
                            sf36_energyfatigue: req.body.sf36_energyfatigue,
                            sf36_wellbeing: req.body.sf36_wellbeing,
                            sf36_Socialfunction: req.body.sf36_Socialfunction,
                            sf36_pain: req.body.sf36_pain,
                            sf36_health: req.body.sf36_health
                        };
                        patient.preoperative.presf36score = sf36scoreDetails;
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient score Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });

    router.post('/surgeon_Patientkujalascoure', (req, res) => {
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
                        const kujalascoreDetails = {
                            kujalascore_limp: req.body.kujalascore_limp,
                            kujalascore_support: req.body.kujalascore_support,
                            kujalascore_walking: req.body.kujalascore_walking,
                            kujalascore_stairs: req.body.kujalascore_stairs,
                            kujalascore_running: req.body.kujalascore_running,
                            kujalascore_squatting: req.body.kujalascore_squatting,
                            kujalascore_jumping: req.body.kujalascore_jumping,
                            kujalascore_prolonged: req.body.kujalascore_prolonged,
                            kujalascore_pain: req.body.kujalascore_pain,
                            kujalascore_swelling: req.body.kujalascore_swelling,
                            kujalascore_painful: req.body.kujalascore_painful,
                            kujalascore_atrophy: req.body.kujalascore_atrophy,
                            kujalascore_flexion: req.body.kujalascore_flexion,
                            totalkujalascore: req.body.totalkujalascore
                        };
                        patient.preoperative.prekujalascore = kujalascoreDetails;
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient score Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });


    router.post('/surgeon_Patientoxfordscoure', (req, res) => {
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
                        const OxfordscoreDetails = {
                            oxfordscore_pain: req.body.oxfordscore_pain,
                            oxfordscore_trouble: req.body.oxfordscore_trouble,
                            oxfordscore_sick: req.body.oxfordscore_sick,
                            oxfordscore_walk: req.body.oxfordscore_walk,
                            oxfordscore_painful: req.body.oxfordscore_painful,
                            oxfordscore_limping: req.body.oxfordscore_limping,
                            oxfordscore_kneel: req.body.oxfordscore_kneel,
                            oxfordscore_troubled: req.body.oxfordscore_troubled,
                            oxfordscore_interfered: req.body.oxfordscore_interfered,
                            oxfordscore_felt: req.body.oxfordscore_felt,
                            oxfordscore_household: req.body.oxfordscore_household,
                            oxfordscore_stairs: req.body.oxfordscore_stairs,
                            totaloxfordscore: req.body.totaloxfordscore
                        };
                        patient.preoperative.preoxfordscore = OxfordscoreDetails;
                        patient.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Patient score Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });




    return router;
}
