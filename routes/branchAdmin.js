const Hospital = require('../models/hospital'); // Import Hospital Model Schema
const User = require('../models/user');
const config = require('../config/database'); // Import database configuration
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports = (router) => {
    router.post('/getHospitalBranchInfo', (req, res) => {
        // console.log(req.body);
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch id provided' });
            } else {
                //res.json({ success: false, message: 'No provided' });
                req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
                req.body.branchId = mongoose.Types.ObjectId(req.body.branchId);
                Hospital.findOne({ _id: req.body.hospitalId }, (err, hospital) => {
                    if (err) {
                        res.json({ success: false, message: 'Not a valid hospital Id' });
                    } else {
                        if (!hospital) {
                            res.json({ success: false, message: 'No hospital found!' });
                        } else {
                            //res.json({ success: true, message: hospital });
                            for (let i = 0; i < hospital.branchDetails.length; i++) {
                                if (req.body.branchId.equals(hospital.branchDetails[i]._id)) {
                                    res.json({ success: true, message: hospital.branchDetails[i], data: hospital });
                                }
                            }
                        }
                    }
                });

            }
        }

    });

    router.post('/branch_GetsurgeonName', (req, res) => {
        //console.log(req.body);
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch id  provided' });
            } else {
                // req.body.hospitalId= mongoose.Types.ObjectId(req.body.hospitalId);
                // req.body.branchId= mongoose.Types.ObjectId(req.body.branchId);
                User.find({ hospitalId: req.body.hospitalId, branchId: req.body.branchId, usertype: "surgeon" }, (err, branchAdminDetail) => {
                    if (err) {
                        res.json({ success: false, message: 'Not a valid Id' });
                    } else {
                        if (!branchAdminDetail) {
                            res.json({ success: false, message: '0' });
                        } else {
                            res.json({ success: true, message: branchAdminDetail });
                        }
                    }
                });
            }
        }

    });

    router.post('/branch_GetSurpportList', (req, res) => {

        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch id  provided' });
            } else {
                if (!req.body.surgeonId) {
                    res.json({ success: false, message: 'No surgeon id  provided' });
                } else {
                    // req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
                    // req.body.branchId = mongoose.Types.ObjectId(req.body.branchId);
                    User.find({ hospitalId: req.body.hospitalId, branchId: req.body.branchId, surgeonId: req.body.surgeonId }, (err, branchAdminDetail) => {
                        if (err) {
                            res.json({ success: false, message: 'Not a valid Id' });
                        } else {
                            if (!branchAdminDetail) {
                                res.json({ success: false, message: '0' });
                            } else {
                                res.json({ success: true, message: branchAdminDetail });
                            }
                        }
                    });
                }

            }
        }

    });

    router.post('/branchGetUserList', (req, res) => {
        // console.log(req.body);
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch id provided' });
            } else {

                User.find({ hospitalId: req.body.hospitalId, branchId: req.body.branchId }, (err, hospital) => {
                    if (err) {
                        res.json({ success: false, message: 'Not a valid hospital Id' });
                    } else {
                        if (!hospital) {
                            res.json({ success: false, message: 'No hospital found!' });
                        } else {
                            res.json({ success: false, message: hospital });
                        }
                    }
                });

            }
        }

    });

    router.post('/branch_AddSupportStaff', (req, res) => {
       // console.log(req.body);
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.branchId) {
                res.json({ success: false, message: 'No branch id provided' });
            } else {
                if (!req.body.surgeonId) {
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
                                            branchId: req.body.branchId,
                                            surgeonId: req.body.surgeonId,
                                            name: req.body.name,
                                            email: req.body.email,
                                            phoneno: req.body.phoneno,
                                            username: req.body.username,
                                            password: req.body.password,
                                            fileName: req.body.filename,
                                            filetype: req.body.filetype,
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

    router.post('/branch_AddSurgeon', (req, res) => {
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.branchId) {
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
                                                    branchId: req.body.branchId,
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

    router.get('/branch_GetSingleUserDetail/:id', (req, res) => {
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

    router.put('/branch_updateUserDetail', (req, res) => {
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

    router.delete('/branch_DeleteUserDetails/:id', (req, res) => {
        // console.log(req.params.id);
        if (!req.params.id) {
            res.json({ success: false, message: 'No Id was provided!' });
        } else {
            User.findOne({ _id: req.params.id }, (err, userDetail) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    if (!userDetail) {
                        res.json({ success: false, message: 'No user was found!' })
                    } else {
                        userDetail.remove((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'User Deleted' });
                            }
                        });
                    }
                }
            });
        }
    });

    router.put('/branch_ToggleUserStatus', (req, res) => {
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