const Hospital = require('../models/hospital'); // Import Hospital Model Schema
const User = require('../models/user');
const config = require('../config/database'); // Import database configuration
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports = (router) => {

    router.post('/login', (req, res) => {
        if (!req.body.username) {
            res.json({ success: false, message: 'No username provided' });
        } else {
            if (!req.body.password) {
                res.json({ success: false, message: 'No password provided' });
            } else {
                User.findOne({ username: req.body.username, password: req.body.password  }, (err, user) => {
                    if (err) {
                        res.json({ success: false, message: err });
                    } else {
                        if (!user) {
                            res.json({ success: false, message: 'Invalid Username and password' });
                        } else {
                             const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
                            res.json({ success: true, data:'Login success', message: user, token: token, user: { username: user.username } });
                            // User.findOne({ password: req.body.password }, (err, user) => {
                            //     if (err) {
                            //         res.json({ success: false, message: err });
                            //     } else {
                            //         if (!user) {
                            //             res.json({ success: false, message: 'Invalid Password' });
                            //         } else {
                            //             const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' }); // Create a token for client
                            //             res.json({ success: true, data:'Login success', message: user, token: token, user: { username: user.username } });
                            //         }
                            //     }
                            // });
                        }
                    }
                });
            }
        }
    });

    /* ================================================
  MIDDLEWARE - Used to grab user's token from headers
  ================================================ */
    router.use((req, res, next) => {
        const token = req.headers['authorization']; // Create token found in headers
        //console.log(token);
        // Check if token was found in headers
        if (!token) {
            res.json({ success: false, message: 'No token provided' }); // Return error
        } else {
            // Verify the token is valid
            jwt.verify(token, config.secret, (err, decoded) => {
                // Check if error is expired or invalid
                if (err) {
                    res.json({ success: false, message: 'Token invalid: ' + err }); // Return error for token validation
                } else {
                    req.decoded = decoded; // Create global variable to use in any request beyond
                    next(); // Exit middleware
                }
            });
        }
    });

    /**Add new Hospital**/
    router.post('/addHospital', (req, res) => {

        if (!req.body.hospitalName) {
            res.json({ success: false, message: 'No hospital Name Provided' });
        } else {
            if (!req.body.hospitalAlias) {
                res.json({ success: false, message: 'No Alias Name Provided' });
            } else {
                if (!req.body.hospitalType) {
                    res.json({ success: false, message: 'No hospital Type Provided' });
                } else {
                    if (!req.body.hospitalAddress) {
                        res.json({ success: false, message: 'No hospital Address Provided' });
                    } else {
                        if (!req.body.hospitalPhoneno) {
                            res.json({ success: false, message: 'No hospital phone no Provided' });
                        } else {
                            if (!req.body.hospitalEmail) {
                                res.json({ success: false, message: 'No hospital Email Provided' });
                            } else {
                                if (!req.body.hospitalWebsite) {
                                    res.json({ success: false, message: 'No hospital Website Provided' });
                                } else {
                                    if (!req.body.noOfSurgeons) {
                                        res.json({ success: false, message: 'No of surgeons Provided' });
                                    } else {
                                        if (!req.body.noOfSupportStaffs) {
                                            res.json({ success: false, message: 'No of support staff Provided' });
                                        } else {
                                            let hospital = new Hospital({
                                                hospitalName: req.body.hospitalName,
                                                hospitalAlias: req.body.hospitalAlias,
                                                hospitalType: req.body.hospitalType,
                                                hospitalAddress: req.body.hospitalAddress,
                                                hospitalPhoneno: req.body.hospitalPhoneno,
                                                hospitalEmail: req.body.hospitalEmail,
                                                hospitalWebsite: req.body.hospitalWebsite,
                                                noOfSurgeons: req.body.noOfSurgeons,
                                                noOfSupportStaffs: req.body.noOfSupportStaffs,
                                                service: req.body.service,
                                                fileName: req.body.filename,
                                                filetype: req.body.filetype
                                            });
                                            hospital.save((err) => {
                                                if (err) {
                                                    res.json({ success: false, message: err });
                                                } else {
                                                    res.json({ success: true, message: 'Hospital saved!' });
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

        //  const hospital = new Hospital({
        //      hospitalName:req.body.hospitalName,
        //      hospitalEmail:req.body.hospitalEmail
        //  });

        //  hospital.save((err) => {
        //     if(err){
        //         res.json({ success:false , message:err});
        //     } else {
        //         res.json({ success:true , message:'Hospital saved!'});
        //     }
        //  });

    });

    //Get all hospitals

    router.get('/getHospitals', (req, res) => {
        Hospital.find({}, (err, data) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {
                res.json({ success: true, message: data });
            }
        });
    });

    //Get all Surgeon Names

    // router.get('/getHospitals',(req,res) => {
    //     User.find({userType:"surgeon" } ,(err,data)=>{
    //         if(err) {
    //             res.json({ success:false , message:err});
    //         } else {
    //             res.json({ success:true , message:data});
    //         }
    //     });
    // });

    //Get single Hospital
    router.get('/getSingleHospital/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No hospital id was provided!!' });
        } else {
            Hospital.findOne({ _id: req.params.id }, (err, hospital) => {
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

    //Update hospital
    router.put('/updateHospital', (req, res) => {
        //console.log(req.body);
        if (!req.body.newHospitalId) {
            res.json({ success: false, message: 'No Id was provided!' });
        } else {
            req.body.newHospitalId = mongoose.Types.ObjectId(req.body.newHospitalId);//Converting string type to ObjectId type
            Hospital.findOne({ _id: req.body.newHospitalId }, (err, hospital) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid hospital Id' });
                } else {
                    if (!hospital) {
                        res.json({ success: false, message: 'Hospital Id was not found' });
                    } else {
                        hospital.hospitalName = req.body.newHospitalName;
                        hospital.hospitalAlias = req.body.newHospitalAlias;
                        hospital.hospitalType = req.body.newHospitalType;
                        hospital.hospitalAddress = req.body.newHospitalAddress;
                        hospital.hospitalPhoneno = req.body.newHospitalPhoneno;
                        hospital.hospitalEmail = req.body.newHospitalEmail;
                        hospital.hospitalWebsite = req.body.newHospitalWebsite;
                        hospital.noOfSurgeons = req.body.newNoOfSurgeons;
                        hospital.noOfSupportStaffs = req.body.newNoOfSupportStaffs;
                        hospital.service = req.body.newService;
                        if (req.body.newfilename) {
                            hospital.fileName = req.body.newfilename;
                            hospital.filetype = req.body.newfiletype;
                        }
                        hospital.save((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Hospital Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });

    //Delete Hospital
    router.delete('/deleteHospital/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No Id was provided!' });
        } else {
            Hospital.findOne({ _id: req.params.id }, (err, hospital) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    if (!hospital) {
                        res.json({ success: false, message: 'No hospital was found!' })
                    } else {
                        hospital.remove((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: true, message: 'Hospital deleted' });
                            }
                        });
                    }
                }
            });
        }
    });

    //Add Branch from select hospital
    router.post('/addBranch', (req, res) => {
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);//Converting string type to ObjectId type
            Hospital.findOne({ _id: req.body.hospitalId }, (err, hospital) => {
                if (err) {
                    res.json({ success: false, message: 'Something happened!' });
                } else {
                    if (!hospital) {
                        res.json({ success: false, message: 'No hospital matches the id' })
                    } else {
                        //Add Branch
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
                            service: req.body.service,
                            fileName: req.body.filename,
                            filetype: req.body.filetype
                        });
                        //Increase branch count 
                        hospital.noOfBranches++;
                        hospital.hasBranch = 'Yes';
                        //Save hospital with Brranch
                        hospital.save((err) => {
                            if (err) {
                                res.json({ success: false, message: 'Something went wrong!' });
                            } else {
                                res.json({ success: true, message: 'Branch Added' });
                            }
                        });
                    }
                }
            });
        }
    });

    //Get Branches
    router.get('/getBranches/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No id provided' });
        } else {
            req.params.id = mongoose.Types.ObjectId(req.params.id);

            Hospital.findOne({ _id: req.params.id }, (err, hospital) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid Id' });
                } else {
                    if (!hospital) {
                        res.json({ success: false, message: 'No hospital found' });
                    } else {
                        res.json({ success: true, message: hospital.branchDetails });
                    }
                }
            });
        }
    });

    router.post('/getSingleBranch', (req, res) => {
        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital Id provided' });
        } else {
            if (!req.body.newBranchId) {
                res.json({ success: false, message: 'No branch Id provided' });
            } else {
                req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
                req.body.newBranchId = mongoose.Types.ObjectId(req.body.newBranchId);
                Hospital.findOne({ _id: req.body.hospitalId }, (err, hospital) => {
                    if (err) {
                        res.json({ success: false, message: 'Not a valid hospital Id' });
                    } else {
                        if (!hospital) {
                            res.json({ success: false, message: 'No hospital found!' });
                        } else {
                            for (let i = 0; i < hospital.branchDetails.length; i++) {
                                if (req.body.newBranchId.equals(hospital.branchDetails[i]._id)) {
                                    res.json({ success: true, message: hospital.branchDetails[i] });
                                }
                            }
                        }
                    }
                });
            }
        }
    });

    //Update Branch
    router.put('/updateBranch', (req, res) => {
        console.log(req.body);
        req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
        req.body.newBranchId = mongoose.Types.ObjectId(req.body.newBranchId);

        if (!req.body.hospitalId) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!req.body.newBranchId) {
                res.json({ success: false, message: 'No branch id provided' });
            } else {
                req.body.hospitalId = mongoose.Types.ObjectId(req.body.hospitalId);
                req.body.newBranchId = mongoose.Types.ObjectId(req.body.newBranchId);
                Hospital.findOne({ _id: req.body.hospitalId }, (err, hospital) => {
                    if (err) {
                        res.json({ success: false, message: 'Something went wrong!' });
                    } else {
                        if (!hospital) {
                            res.json({ success: false, message: 'Invalid hospital Id' });
                        } else {
                            for (let i = 0; i < hospital.branchDetails.length; i++) {
                                if (req.body.newBranchId.equals(hospital.branchDetails[i]._id)) {
                                    hospital.branchDetails[i].branchAlias = req.body.newBranchAlias;
                                    hospital.branchDetails[i].branchType = req.body.newBranchType;
                                    hospital.branchDetails[i].branchName = req.body.newBranchName;
                                    hospital.branchDetails[i].branchAddress = req.body.newBranchAddress;
                                    hospital.branchDetails[i].branchPhoneno = req.body.newBranchPhoneno;
                                    hospital.branchDetails[i].branchEmail = req.body.newBranchEmail;
                                    hospital.branchDetails[i].branchWebsite = req.body.newBranchWebsite;
                                    hospital.branchDetails[i].noOfSurgeons = req.body.newNoOfSurgeons;
                                    hospital.branchDetails[i].noOfSupportStaffs = req.body.newNoOfSupportStaffs;
                                    hospital.branchDetails[i].service = req.body.service;
                                    if (req.body.newfilename) {
                                        hospital.branchDetails[i].fileName = req.body.newfilename;
                                        hospital.branchDetails[i].filetype = req.body.newfiletype;
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
    router.post('/deleteBranch', (req, res) => {
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

    router.put('/toggleBranchStatus', (req, res) => {
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


    //Get User Details
    router.get('/getUserDetails/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No id provided' });
        } else {
            req.params.id = mongoose.Types.ObjectId(req.params.id);

            User.find({ hospitalId: req.params.id }, (err, hospitalAdminDetail) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid Id' });
                } else {
                    if (!hospitalAdminDetail) {
                        res.json({ success: false, message: '0' });
                    } else {
                        res.json({ success: true, message: hospitalAdminDetail });
                    }
                }
            });
        }
    });

    //Get User Details
    router.get('/getHospitalDetails/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'No id provided' });
        } else {
            req.params.id = mongoose.Types.ObjectId(req.params.id);

            Hospital.findOne({ _id: req.params.id }, (err, hospitalDetail) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid Id' });
                } else {
                    if (!hospitalDetail) {
                        res.json({ success: false, message: 'No list' });
                    } else {
                        res.json({ success: true, message1: hospitalDetail });
                    }
                }
            });
        }
    });

    //Add Hospital Admin from select hospital
    router.post('/addHospitalAdmin', (req, res) => {
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
                        if (!req.body.name) {
                            res.json({ success: false, message: 'No name provided' });
                        } else {
                            if (!req.body.gender) {
                                res.json({ success: false, message: 'No gender provided' });
                            } else {
                                if (!req.body.email) {
                                    res.json({ success: false, message: 'No email provided' });
                                } else {
                                    if (!req.body.phoneno) {
                                        res.json({ success: false, message: 'No phoneno provided' });
                                    } else {
                                        if (!req.body.technicalno) {
                                            res.json({ success: false, message: 'No technicalno provided' });
                                        } else {
                                            if (!req.body.username) {
                                                res.json({ success: false, message: 'No username provided' });
                                            } else {
                                                if (!req.body.password) {
                                                    res.json({ success: false, message: 'No password provided' });
                                                } else {
                                                    if (!req.body.filename) {
                                                        res.json({ success: false, message: 'No image provided' });
                                                    } else {
                                                        const user = new User({
                                                            hospitalId: req.body.hospitalId,
                                                            name: req.body.name,
                                                            gender: req.body.gender,
                                                            email: req.body.email,
                                                            phoneno: req.body.phoneno,
                                                            technicalno: req.body.technicalno,
                                                            username: req.body.username,
                                                            password: req.body.password,
                                                            fileName: req.body.filename,
                                                            filetype: req.body.filetype,
                                                            usertype: 'hospitaladmin'
                                                        });

                                                        user.save((err) => {
                                                            if (err) {
                                                                res.json({ success: false, message: err });
                                                            } else {
                                                                res.json({ success: true, message: 'Hospital Admin saved!' });
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
        }
    });

    //Delete Hospital Admin
    router.delete('/deleteHospitalAdmin/:id', (req, res) => {
        //console.log(req.params.id)
        if (!req.params.id) {
            res.json({ success: false, message: 'No Id was provided!' });
        } else {
            User.findOne({ _id: req.params.id }, (err, hospitalAdmin) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    if (!hospitalAdmin) {
                        res.json({ success: false, message: 'No hospital was found!' })
                    } else {
                        hospitalAdmin.remove((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                res.json({ success: false, message: 'Hospital Admin Deleted', data: hospitalAdmin.hospitalId, data1: hospitalAdmin.branchId, data2: hospitalAdmin.surgeonId });
                            }
                        });
                    }
                }
            });
        }
    });

    //Get single User
    router.get('/getSingleUser/:id', (req, res) => {
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
                        res.json({ success: false, message: 'No Branch Admin found' });
                    } else {
                        res.json({ success: true, message: singleUser });
                    }
                }
            });
        }
    });

    //Update hospital
    router.put('/updateHospitalAdmin', (req, res) => {
        //console.log(req.body.edithospitalId);
        if (!req.body.edituserid) {
            res.json({ success: false, message: 'No Id was provided!' });
        } else {
            req.body.edituserid = mongoose.Types.ObjectId(req.body.edituserid);//Converting string type to ObjectId type
            User.findOne({ _id: req.body.edituserid }, (err, user) => {
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
                        user.gender = req.body.editgender;
                        user.email = req.body.editemail;
                        user.phoneno = req.body.editphoneno;
                        user.technicalno = req.body.edittechno;
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

                                res.json({ success: true, message: 'Hospital Updated!' });
                            }
                        });
                    }
                }
            });
        }
    });

    //Get User Details
    router.get('/getBranchUserDetails/:id', (req, res) => {
        const [hospital_id, branch_id] = req.params.id.split('-');
        //console.log(branch_id);
        //console.log(branch_id);
        if (!hospital_id) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!branch_id) {
                res.json({ success: false, message: 'No branch id  provided' });
            } else {
                //    hospital_id= mongoose.Types.ObjectId(hospital_id);
                //    branch_id= mongoose.Types.ObjectId(branch_id);
                User.find({ hospitalId: hospital_id, branchId: branch_id }, (err, branchAdminDetail) => {
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

    //Add Hospital Admin from select hospital
    router.post('/addBranchAdmin', (req, res) => {
        const [hospital_id, branch_id] = req.body.branchId.split('-');
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
                        if (!req.body.name) {
                            res.json({ success: false, message: 'No name provided' });
                        } else {
                            if (!req.body.email) {
                                res.json({ success: false, message: 'No email provided' });
                            } else {
                                if (!req.body.phoneno) {
                                    res.json({ success: false, message: 'No phoneno provided' });
                                } else {
                                    if (!req.body.technicalno) {
                                        res.json({ success: false, message: 'No technicalno provided' });
                                    } else {
                                        if (!req.body.username) {
                                            res.json({ success: false, message: 'No username provided' });
                                        } else {
                                            if (!req.body.password) {
                                                res.json({ success: false, message: 'No password provided' });
                                            } else {
                                                if (!req.body.filename) {
                                                    res.json({ success: false, message: 'No Image provided' });
                                                } else {
                                                    const user = new User({
                                                        hospitalId: req.body.hospitalId,
                                                        branchId: branch_id,
                                                        name: req.body.name,
                                                        email: req.body.email,
                                                        phoneno: req.body.phoneno,
                                                        technicalno: req.body.technicalno,
                                                        username: req.body.username,
                                                        password: req.body.password,
                                                        fileName: req.body.filename,
                                                        filetype: req.body.filetype,
                                                        usertype: 'branchadmin'
                                                    });

                                                    user.save((err) => {
                                                        if (err) {
                                                            res.json({ success: false, message: err });
                                                        } else {
                                                            User.find({ branchId: req.body.branchId }, (err, branch) => {
                                                                if (err) {
                                                                    res.json({ success: false, message: 'Something happened!' });
                                                                } else {
                                                                    if (!branch) {
                                                                        res.json({ success: false, message: 'No Branch matches the id' })
                                                                    } else {
                                                                        res.json({ success: true, message: 'Branch Admin saved!', data: branch });
                                                                    }
                                                                }
                                                            });

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
            });
        }
    });

    //Add Surgeon from select hospital
    router.post('/addSurgeon', (req, res) => {
        const [hospital_id, branch_id] = req.body.branchId.split('-');
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
                        if (!req.body.regno) {
                            res.json({ success: false, message: 'No Regno provided' });
                        } else {
                            if (!req.body.city) {
                                res.json({ success: false, message: 'No city provided' });
                            } else {
                                if (!req.body.country) {
                                    res.json({ success: false, message: 'No country provided' });
                                } else {
                                    if (!req.body.email) {
                                        res.json({ success: false, message: 'No email provided' });
                                    } else {
                                        if (!req.body.phoneno) {
                                            res.json({ success: false, message: 'No phoneno provided' });
                                        } else {
                                            if (!req.body.username) {
                                                res.json({ success: false, message: 'No username provided' });
                                            } else {
                                                if (!req.body.password) {
                                                    res.json({ success: false, message: 'No password provided' });
                                                } else {
                                                    if (!req.body.filename) {
                                                        res.json({ success: false, message: 'No image provided' });
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
                                                                User.find({ branchId: req.body.branchId }, (err, branch) => {
                                                                    if (err) {
                                                                        res.json({ success: false, message: 'Something happened!' });
                                                                    } else {
                                                                        if (!branch) {
                                                                            res.json({ success: false, message: 'No Branch matches the id' })
                                                                        } else {
                                                                            res.json({ success: true, message: 'Branch Admin saved!', data: branch });
                                                                        }
                                                                    }
                                                                });
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
        }
    });

    router.get('/getSurgeon/:id', (req, res) => {
        const [hospital_id, branch_id] = req.params.id.split('-');
        //console.log(branch_id);
        //console.log(branch_id);
        if (!hospital_id) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!branch_id) {
                res.json({ success: false, message: 'No branch id  provided' });
            } else {
                //    hospital_id= mongoose.Types.ObjectId(hospital_id);
                //    branch_id= mongoose.Types.ObjectId(branch_id);
                User.find({ hospitalId: hospital_id, branchId: branch_id, usertype: "surgeon" }, (err, branchAdminDetail) => {
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
    router.get('/getBranchSurgeonDetails/:id', (req, res) => {
        const [hospital_id, branch_id, surgeon_id] = req.params.id.split('-');
        if (!hospital_id) {
            res.json({ success: false, message: 'No hospital id provided' });
        } else {
            if (!branch_id) {
                res.json({ success: false, message: 'No branch id  provided' });
            } else {
                if (!surgeon_id) {
                    res.json({ success: false, message: 'No branch id  provided' });
                } else {
                    // hospital_id= mongoose.Types.ObjectId(hospital_id);
                    // branch_id= mongoose.Types.ObjectId(branch_id);
                    User.find({ hospitalId: hospital_id, branchId: branch_id, surgeonId: surgeon_id }, (err, surgeonAdminDetail) => {
                        if (err) {
                            res.json({ success: false, message: 'Not a valid Id' });
                        } else {
                            if (!surgeonAdminDetail) {
                                res.json({ success: false, message: '0' });
                            } else {
                                res.json({ success: true, message: surgeonAdminDetail });
                            }
                        }
                    });
                }

            }
        }

    });

    //Add Surgeon from select hospital
    router.post('/addSupportStaff', (req, res) => {
        const [hospital_id, branch_id, surgeon_id] = req.body.surgeonId.split('-');
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
                        if (!req.body.name) {
                            res.json({ success: false, message: 'No name provided' });
                        } else {
                            if (!req.body.email) {
                                res.json({ success: false, message: 'No email provided' });
                            } else {
                                if (!req.body.phoneno) {
                                    res.json({ success: false, message: 'No phoneno provided' });
                                } else {
                                    if (!req.body.username) {
                                        res.json({ success: false, message: 'No username provided' });
                                    } else {
                                        if (!req.body.password) {
                                            res.json({ success: false, message: 'No password provided' });
                                        } else {
                                            if (!req.body.filename) {
                                                res.json({ success: false, message: 'No filename provided' });
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
                                                    fileName: req.body.filename,
                                                    filetype: req.body.filetype,
                                                    usertype: 'supportstaff'
                                                });

                                                user.save((err) => {
                                                    if (err) {
                                                        res.json({ success: false, message: err });
                                                    } else {
                                                        User.find({ branchId: req.body.branchId }, (err, branch) => {
                                                            if (err) {
                                                                res.json({ success: false, message: 'Something happened!' });
                                                            } else {
                                                                if (!branch) {
                                                                    res.json({ success: false, message: 'No Branch matches the id' })
                                                                } else {
                                                                    res.json({ success: true, message: 'Branch Admin saved!', data: branch });
                                                                }
                                                            }
                                                        });
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
        }
    });
    router.get('/getHospitalBranchDetails/:id', (req, res) => {
        const [hospital_id, branch_id] = req.params.id.split('-');
        //console.log(hospital_id);
        //console.log(branch_id);
        if (!hospital_id) {
            res.json({ success: false, message: 'No hospital Id provided' });
        } else {
            if (!branch_id) {
                res.json({ success: false, message: 'No branch Id provided' });
            } else {
                Hospital.findOne({ _id: hospital_id }, (err, hospital) => {
                    if (err) {
                        res.json({ success: false, message: 'Not a valid hospital Id' });
                    } else {
                        if (!hospital) {
                            res.json({ success: false, message: 'No hospital found!' });
                        } else {
                            for (let i = 0; i < hospital.branchDetails.length; i++) {
                                if (branch_id == (hospital.branchDetails[i]._id)) {
                                    res.json({ success: true, message: hospital.branchDetails[i], data: hospital });
                                }
                            }
                        }
                    }
                });
            }
        }

    });


    //toggleHospitalStatus
    router.put('/updateHospitalStatus', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'No id provided!' });
        } else {
            Hospital.findOne({ _id: req.body._id }, (err, hospital) => {
                if (err) {
                    res.json({ success: false, message: 'Not a valid id!' });
                } else {
                    if (!hospital) {
                        res.json({ success: false, message: 'No hospitals found!' });
                    } else {
                        if (hospital.active) {
                            hospital.active = false;
                            hospital.statusText = 'Activate';
                        } else {
                            hospital.active = true;
                            hospital.statusText = 'Deactivate';
                        }
                        hospital.save((err) => {
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

    //toggleHospitalStatus
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