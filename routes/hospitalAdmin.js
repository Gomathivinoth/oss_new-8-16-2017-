const Hospital = require('../models/hospital'); // Import Hospital Model Schema
const User = require('../models/user');
const config = require('../config/database'); // Import database configuration
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports = (router) => {

    router.get('/getHospitalInfo/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'no id provided' });
        } else {
            Hospital.findOne({ _id: req.params.id }, (err, hospital) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    if (!hospital) {
                        res.json({ success: false, message: 'No hospitals found' });
                    } else {
                        res.json({ success: true, message: hospital });
                    }
                }
            });
        }
    });

    router.post('/hospital_AddBranch', (req, res) => {

        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);//Converting string type to ObjectId type
            Hospital.findOne({ _id: req.body.hospitalId }, (err, hospital) => {
                if (err) {
                    res.json({ success: false, message: 'Something happened!' });
                } else {
                    if (!hospital) {
                        res.json({ success: false, message: 'No hospital matches the id' });
                    } else {
                        if (!req.body.branchAlias) {
                            res.json({ success: false, message: 'No hospital alias name provided' });
                        } else {
                            if (!req.body.branchType) {
                                res.json({ success: false, message: 'No branch type provided' });
                            } else {
                                if (!req.body.branchName) {
                                    res.json({ success: false, message: 'No branch Name provided' });
                                } else {
                                    if (!req.body.branchAddress) {
                                        res.json({ success: false, message: 'No branch Name provided' });
                                    } else {
                                        if (!req.body.branchPhoneno) {
                                            res.json({ success: false, message: 'No branch Phone no provided' });
                                        } else {
                                            if (!req.body.branchEmail) {
                                                res.json({ success: false, message: 'No branch Email provided' });
                                            } else {
                                                if (!req.body.branchWebsite) {
                                                    res.json({ success: false, message: 'No branch Website provided' });
                                                } else {
                                                    if (!req.body.noOfSurgeons) {
                                                        res.json({ success: false, message: 'No of Surgeons provided' });
                                                    } else {
                                                        if (!req.body.noOfSupportStaffs) {
                                                            res.json({ success: false, message: 'No of support staff provided' });
                                                        } else {
                                                            hospital.branchDetails.push({
                                                                branchAlias: req.body.branchAlias,
                                                                branchType: req.body.branchType,
                                                                branchName: req.body.branchName,
                                                                branchAddress: req.body.branchAddress,
                                                                branchPhoneno: req.body.branchPhoneno,
                                                                branchEmail: req.body.branchEmail,
                                                                branchWebsite: req.body.branchWebsite,
                                                                noOfSurgeons: req.body.noOfSurgeons,
                                                                noOfSupportStaffs: req.body.noOfSupportStaffs,
                                                                fileName: req.body.filename,
                                                                filetype: req.body.filetype,
                                                                service: req.body.service

                                                            });
                                                            hospital.noOfBranches++;
                                                            hospital.hasBranch = 'Yes';
                                                            hospital.save((err) => {
                                                                if (err) {
                                                                    res.json({ success: false, message: 'Something went wrong!' });
                                                                } else {
                                                                    res.json({ success: true, message: 'Branch Added' });
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
            });
        }
    });

    router.post('/hospital_EditBranch', (req, res) => {
        // console.log(req.body);
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital Id provided' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch Id provided' });
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
                                    res.json({ success: true, message: hospital.branchDetails[i] });
                                }
                            }
                        }
                    }
                });
            }
        }
    });

    router.put('/hospital_UpdateBranch', (req, res) => {
        //console.log(req.body);
        req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
        req.body.branchId = mongoose.Types.ObjectId(req.body.branchId);

        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch id provided' });
            } else {
                req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
                req.body.branchId = mongoose.Types.ObjectId(req.body.branchId);
                Hospital.findOne({ _id: req.body.hospitalId }, (err, hospital) => {
                    if (err) {
                        res.json({ success: false, message: 'Something went wrong!' });
                    } else {
                        if (!hospital) {
                            res.json({ success: false, message: 'Invalid hospital Id' });
                        } else {
                            for (let i = 0; i < hospital.branchDetails.length; i++) {
                                if (req.body.branchId.equals(hospital.branchDetails[i]._id)) {
                                    hospital.branchDetails[i].branchAlias = req.body.editbranchAlias;
                                    hospital.branchDetails[i].branchType = req.body.editbranchType;
                                    hospital.branchDetails[i].branchName = req.body.editname;
                                    hospital.branchDetails[i].branchAddress = req.body.editaddress;
                                    hospital.branchDetails[i].branchPhoneno = req.body.editphoneno;
                                    hospital.branchDetails[i].branchEmail = req.body.editemail;
                                    hospital.branchDetails[i].branchWebsite = req.body.editwebsite;
                                    hospital.branchDetails[i].noOfSurgeons = req.body.noOfSurgeons;
                                    hospital.branchDetails[i].noOfSupportStaffs = req.body.noOfSupportStaffs;
                                    hospital.branchDetails[i].service = req.body.service;
                                    if (req.body.editfilename) {
                                        hospital.branchDetails[i].fileName = req.body.editfilename;
                                        hospital.branchDetails[i].filetype = req.body.editfiletype;
                                    }
                                    hospital.save((err) => {
                                        if (err) {
                                            res.json({ success: false, message: 'Something went wrong!' });
                                        } else {
                                            res.json({ success: true, message: 'Branch updated!' })
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

    //Delete Branch
    router.post('/hospital_DeleteBranch', (req, res) => {
        // console.log(req.body);
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided!' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch Id provided!' });
            } else {
                req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
                req.body.branchId = mongoose.Types.ObjectId(req.body.branchId);
                Hospital.findOne({ _id: req.body.hospitalId }, (err, hospital) => {
                    if (err) {
                        res.json({ success: false, message: 'Not a valid Hospital Id!' });
                    } else {
                        if (!hospital) {
                            res.json({ success: false, message: 'No hospital found!' });
                        } else {
                            for (let i = 0; i < hospital.branchDetails.length; i++) {
                                if (req.body.branchId.equals(hospital.branchDetails[i]._id)) {
                                    hospital.branchDetails.splice(i, 1);
                                    hospital.noOfBranches--;
                                    if (hospital.noOfBranches < 1) {
                                        hospital.hasBranch = 'No';
                                    }
                                    hospital.save((err) => {
                                        if (err) {
                                            res.json({ success: false, message: err });
                                        } else {
                                            res.json({ success: true, message: 'Branch deleted' });
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

    router.put('/toggleHospitalStatus', (req, res) => {
        // console.log(req.body);
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided!' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch Id provided!' });
            } else {
                req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
                req.body.branchId = mongoose.Types.ObjectId(req.body.branchId);
                Hospital.findOne({ _id: req.body.hospitalId }, (err, hospital) => {
                    if (err) {
                        res.json({ success: false, message: 'Not a valid Hospital Id!' });
                    } else {
                        if (!hospital) {
                            res.json({ success: false, message: 'No hospital found!' });
                        } else {
                            for (let i = 0; i < hospital.branchDetails.length; i++) {
                                if (req.body.branchId.equals(hospital.branchDetails[i]._id)) {
                                    if (hospital.branchDetails[i].active) {
                                        hospital.branchDetails[i].active = false;
                                        hospital.branchDetails[i].statusText = 'Activate';
                                    } else {
                                        hospital.branchDetails[i].active = true;
                                        hospital.branchDetails[i].statusText = 'Deactivate';
                                    }
                                    hospital.save((err) => {
                                        if (err) {
                                            res.json({ success: false, message: err });
                                        } else {
                                            res.json({ success: true, message: 'Branch deleted' });
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

    router.get('/getSurgeonInfo/:id', (req, res) => {
        const [hospital_id, branch_id] = req.params.id.split('-');
        if (!hospital_id) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!branch_id) {
                res.json({ success: false, message: 'No branch  idprovided' });
            } else {
                User.find({ hospitalId: hospital_id, branchId: branch_id }, (err, hospital) => {
                    if (err) {
                        res.json({ success: false, message: err });
                    } else {
                        if (!hospital) {
                            res.json({ success: false, message: 'No Users found' });
                        } else {
                            res.json({ success: true, message: hospital });
                        }
                    }
                });

            }

        }
    });

    router.post('/hospital_AddSurgeon', (req, res) => {
        const [hospital_id, branch_id] = req.body.branchId.split('-');
        if (!hospital_id) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!branch_id) {
                res.json({ success: false, message: 'No branch id provided' });
            } else {
                if (!req.body.name) {
                    res.json({ success: false, message: 'No Surgeon name provided' });
                } else {
                    if (!req.body.regno) {
                        res.json({ success: false, message: 'No Surgeon regno provided' });
                    } else {
                        if (!req.body.city) {
                            res.json({ success: false, message: 'No Surgeon city provided' });
                        } else {
                            if (!req.body.country) {
                                res.json({ success: false, message: 'No Surgeon country provided' });
                            } else {
                                if (!req.body.email) {
                                    res.json({ success: false, message: 'No Surgeon email provided' });
                                } else {
                                    if (!req.body.phoneno) {
                                        res.json({ success: false, message: 'No Surgeon phoneno provided' });
                                    } else {
                                        if (!req.body.username) {
                                            res.json({ success: false, message: 'No Surgeon username provided' });
                                        } else {
                                            if (!req.body.password) {
                                                res.json({ success: false, message: 'No Surgeon password provided' });
                                            } else {
                                                const user = new User({
                                                    hospitalId: req.body.hospitalId,
                                                    branchId: branch_id,
                                                    name: req.body.name,
                                                    regno: req.body.regno,
                                                    city: req.body.city,
                                                    country: req.body.country,
                                                    email: req.body.email,
                                                    phoneno: req.body.phoneno,
                                                    username: req.body.username,
                                                    password: req.body.password,
                                                    fileName: req.body.filename,
                                                    filetype: req.body.filetype,
                                                    usertype: 'surgeon'
                                                });
                                                user.save((err) => {
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
    });

    router.get('/getSurgeonList/:id', (req, res) => {
        const [hospital_id, branch_id] = req.params.id.split('-');
        if (!hospital_id) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!branch_id) {
                res.json({ success: false, message: 'No branch  idprovided' });
            } else {
                User.find({ hospitalId: hospital_id, branchId: branch_id, usertype: 'surgeon' }, (err, surgeon) => {
                    if (err) {
                        res.json({ success: false, message: err });
                    } else {
                        if (!surgeon) {
                            res.json({ success: false, message: 'No Users found' });
                        } else {
                            res.json({ success: true, message: surgeon });
                        }
                    }
                });

            }

        }
    });

    router.get('/getSupportStaffInfo/:id', (req, res) => {
        const [hospital_id, branch_id, surgeon_id] = req.params.id.split('-');
        if (!hospital_id) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!branch_id) {
                res.json({ success: false, message: 'No branch  idprovided' });
            } else {
                User.find({ hospitalId: hospital_id, branchId: branch_id, surgeonId: surgeon_id }, (err, surgeon) => {
                    if (err) {
                        res.json({ success: false, message: err });
                    } else {
                        if (!surgeon) {
                            res.json({ success: false, message: 'No Users found' });
                        } else {
                            res.json({ success: true, message: surgeon });
                        }
                    }
                });

            }

        }
    });

    router.post('/hospital_AddSupportStaff', (req, res) => {
        const [hospital_id, branch_id, surgeon_id] = req.body.surgeonId.split('-');
        if (!hospital_id) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!branch_id) {
                res.json({ success: false, message: 'No branch id provided' });
            } else {
                if (!surgeon_id) {
                    res.json({ success: false, message: 'No surgeon id provided' });
                } else {
                    if (!req.body.name) {
                        res.json({ success: false, message: 'No support staff name provided' });
                    } else {
                        if (!req.body.email) {
                            res.json({ success: false, message: 'No support staff email provided' });
                        } else {
                            if (!req.body.phoneno) {
                                res.json({ success: false, message: 'No support staff phone no provided' });
                            } else {
                                if (!req.body.username) {
                                    res.json({ success: false, message: 'No support staff username provided' });
                                } else {
                                    if (!req.body.password) {
                                        res.json({ success: false, message: 'No support staff password provided' });
                                    } else {
                                        const user = new User({
                                            hospitalId: req.body.hospitalId,
                                            branchId: branch_id,
                                            surgeonId: surgeon_id,
                                            name: req.body.name,
                                            email: req.body.email,
                                            phoneno: req.body.phoneno,
                                            username: req.body.username,
                                            password: req.body.password,
                                            usertype: 'supportstaff'
                                        });
                                        user.save((err) => {
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

    });

    //Get single User
    router.get('/getSingleUserDetail/:id', (req, res) => {
        //console.log(req.params.id);
        if (!req.params.id) {
            res.json({ success: false, message: 'No id provided' });
        } else {
            req.params.id = mongoose.Types.ObjectId(req.params.id);

            User.findOne({ _id: req.params.id }, (err, singleUser) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid Id' });
                } else {
                    if (!singleUser) {
                        res.json({ success: false, message: 'No User Detail found' });
                    } else {
                        res.json({ success: true, message: singleUser });
                    }
                }
            });
        }
    });

    router.put('/updateUserDetail', (req, res) => {
        if (!req.body.userId) {
            res.json({ success: false, message: 'No User Id was provided!' });
        } else {
            req.body.userId = mongoose.Types.ObjectId(req.body.userId);//Converting string type to ObjectId type
            User.findOne({ _id: req.body.userId }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid User Id' });
                } else {
                    if (!user) {
                        res.json({ success: false, message: 'Hospital Id was not found' });
                    } else {
                        user.name = req.body.editname;
                        user.regno = req.body.editregno;
                        user.city = req.body.editcity;
                        user.country = req.body.editcountry;
                        user.email = req.body.editemail;
                        user.phoneno = req.body.editphoneno;
                        user.username = req.body.editusername;
                        user.password = req.body.editpassword;
                        if (req.body.editfilename) {
                            user.fileName = req.body.editfilename;
                            user.filetype = req.body.editfiletype;
                        }
                        user.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {

                                res.json({ success: true, message: 'User Detail Updated!' });
                            }
                        });
                    }
                }
            });
        }

    });

    router.delete('/deleteUserDetails/:id', (req, res) => {
        // console.log(req.params.id);
        if (!req.params.id) {
            res.json({ success: false, message: 'No Id was provided!' });
        } else {
            User.findOne({ _id: req.params.id }, (err, userDetail) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    if (!userDetail) {
                        res.json({ success: false, message: 'No hospital was found!' })
                    } else {
                        userDetail.remove((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Hospital Admin Deleted', data: userDetail.hospitalId, data1: userDetail.branchId, data2: userDetail.surgeonId });
                            }
                        });
                    }
                }
            });
        }
    });

    router.put('/toggleUserStatus', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'No id provided!' });
        } else {
            User.findOne({ _id: req.body._id }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid id!' });
                } else {
                    if (!user) {
                        res.json({ success: false, message: 'No hospitals found!' });
                    } else {
                        if (user.active) {
                            user.active = false;
                            user.statusText = 'Activate';
                        } else {
                            user.active = true;
                            user.statusText = 'Deactivate';
                        }
                        user.save((err) => {
                            if (err) {
                                res.json({ success: false, message: 'Something went wrong!' });
                            } else {
                                res.json({ success: true, message: 'Status changed!' });
                            }
                        });
                    }
                }
            });
        }
    });
    return router;

}