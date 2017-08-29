import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  currentUrl;
  selectHospital;
  hospitalName;
  hospitalId;
  hospitalLists;
  showAddBranch = false;
  branchLists;
  showEditForm = false;
  editFromHospital = false;
  showTable = false;
  showAddBranchPage = false;
  branch_hospital = true;
  branch_alias = true;
  branch_type = true;
  branch_name = true;
  branch_address = true;
  branch_phoneno = true;
  branch_email = true;
  branch_website = true;
  branch_surgeon = true;
  branch_support = true;




  newBranch = {
    hospitalId: '',
    newBranchId: '',
    newBranchAlias: '',
    newBranchType: '',
    newBranchName: '',
    newBranchAddress: '',
    newBranchPhoneno: '',
    newBranchEmail: '',
    newBranchWebsite: '',
    newNoOfSurgeons: '',
    newNoOfSupportStaffs: '',
    filename: '',
    newfilename: '',
    newfiletype: '',
    service: [{
      'serviceName': String,
      'selected': Boolean,
    }]
  };

  branch = {
    hospitalId: '',
    branchAlias: '',
    branchType: '',
    branchName: '',
    branchAddress: '',
    branchPhoneno: '',
    branchEmail: '',
    branchWebsite: '',
    noOfSurgeons: '',
    noOfSupportStaffs: '',
    filename: '',
    filetype: '',
    service: [{
      'serviceName': String,
      'selected': Boolean,
    }]
  };

  newBranchEdit = {
    hospitalId: '',
    newBranchId: '',
    newBranchAlias: '',
    newBranchType: '',
    newBranchName: '',
    newBranchAddress: '',
    newBranchPhoneno: '',
    newBranchEmail: '',
    newBranchWebsite: '',
    newNoOfSurgeons: '',
    newNoOfSupportStaffs: '',
    filename: '',
    newfilename: '',
    newfiletype: '',
    service: [{
      'serviceName': String,
      'selected': Boolean,
    }]
  }

  removeBranch = {
    hospitalId: '',
    branchId: ''
  };

  removeBranchEdit = {
    hospitalId: '',
    branchId: ''
  };

  service: any = [
    { 'serviceName': 'Knee', 'selected': false },
    { 'serviceName': 'Hip', 'selected': false },
    { 'serviceName': 'ACL', 'selected': false },
    { 'serviceName': 'PCL', 'selected': false },
    { 'serviceName': 'Spine', 'selected': false },
    { 'serviceName': 'All', 'selected': false }
  ];

  filesToUpload: Array<File> = [];
  constructor(
    private hospitalService: HospitalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: Http
  ) { }

  showAddBranchForm(id) {
    this.showAddBranch = true;
    this.branch.branchName = '';
    this.branch.branchEmail = '';
    this.hospitalService.getBranches(id).subscribe(data => {
      this.branchLists = data.message;
      for (let i = 0; i < this.branchLists.length; i++) {
        this.branchLists[i].hospitalId = id;
      }
    });
  }

  addBranch(branch) {
    //console.log(branch);
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("uploads[]", files[0], files[0]['name']);

    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
    this.hospitalService.addBranch(branch).subscribe(data => {
      // console.log(data.message);
      this.branch.branchAlias = '';
      this.branch.branchType = '';
      this.branch.branchName = '';
      this.branch.branchAddress = '';
      this.branch.branchPhoneno = '';
      this.branch.branchEmail = '';
      this.branch.branchWebsite = '';
      this.branch.noOfSurgeons = '';
      this.branch.noOfSupportStaffs = '';
      this.branch_alias = false;
      this.branch_type = false;
      this.branch_name = false;
      this.branch_address = false;
      this.branch_phoneno = false;
      this.branch_email = false;
      this.branch_website = false;
      this.branch_surgeon = false;
      this.branch_support = false;
      this.showAddBranchForm(branch.hospitalId);
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.branch.filename = dt + "-" + fileInput.target.files[0]['name'];
    this.branch.filetype = fileInput.target.files[0]['type'];
  }
  editBranch(id) {
    this.newBranch.hospitalId = this.currentUrl.id;
    this.newBranch.newBranchId = id;
    this.showEditForm = true;
    this.hospitalService.getSingleBranch(this.newBranch).subscribe(data => {
      if (data.success) {
        // console.log(data.message);
        this.newBranch.newBranchId = data.message._id;
        this.newBranch.newBranchAlias = data.message.branchAlias;
        this.newBranch.newBranchType = data.message.branchType;
        this.newBranch.newBranchName = data.message.branchName;
        this.newBranch.newBranchAddress = data.message.branchAddress;
        this.newBranch.newBranchPhoneno = data.message.branchPhoneno;
        this.newBranch.newBranchEmail = data.message.branchEmail;
        this.newBranch.newBranchWebsite = data.message.branchWebsite;
        this.newBranch.newNoOfSurgeons = data.message.noOfSurgeons;
        this.newBranch.newNoOfSupportStaffs = data.message.noOfSupportStaffs;
        this.newBranch.service = data.message.service;
        this.newBranch.filename = data.message.fileName;
        this.newBranch.hospitalId = this.currentUrl.id;
        // console.log(data.message);
      }
    });
  }

  updateBranch(newBranch) {
    if (newBranch.newfilename) {
      const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;
      // console.log(files);
      formData.append("uploads[]", files[0], files[0]['name']);

      this.http.post('http://localhost:3000/upload', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
    }

    this.hospitalService.updateBranch(newBranch).subscribe(data => {
      if (data.success) {
        this.showEditForm = false;
        this.hospitalService.getBranches(this.currentUrl.id).subscribe(data => {
          this.branchLists = data.message;
        });
      }
    });
  }
  editFileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.newBranch.newfilename = dt + "-" + fileInput.target.files[0]['name'];
    this.newBranch.newfiletype = fileInput.target.files[0]['type'];

  }

  deleteBranch(id) {
    this.removeBranch.hospitalId = this.currentUrl.id;
    this.removeBranch.branchId = id;
    this.hospitalService.deleteBranch(this.removeBranch).subscribe(data => {
      if (data.success) {
        this.hospitalService.getBranches(this.currentUrl.id).subscribe(data => {
          this.branchLists = data.message;
        });
      }
    });
  }

  editBranchFromSelectHospital(branchId, hospitalId) {
    this.newBranchEdit.hospitalId = hospitalId;
    this.newBranchEdit.newBranchId = branchId;
    this.editFromHospital = true;
    this.hospitalService.getSingleBranch(this.newBranchEdit).subscribe(data => {
      if (data.success) {
        //  console.log(data.message);
        this.newBranchEdit.newBranchId = data.message._id;
        this.newBranchEdit.newBranchAlias = data.message.branchAlias;
        this.newBranchEdit.newBranchType = data.message.branchType;
        this.newBranchEdit.newBranchName = data.message.branchName;
        this.newBranchEdit.newBranchAddress = data.message.branchAddress;
        this.newBranchEdit.newBranchPhoneno = data.message.branchPhoneno;
        this.newBranchEdit.newBranchEmail = data.message.branchEmail;
        this.newBranchEdit.newBranchWebsite = data.message.branchWebsite;
        this.newBranchEdit.newNoOfSurgeons = data.message.noOfSurgeons;
        this.newBranchEdit.newNoOfSupportStaffs = data.message.noOfSupportStaffs;
        this.newBranchEdit.service = data.message.service;
        this.newBranchEdit.filename = data.message.fileName;
        this.newBranchEdit.hospitalId = hospitalId;
      }
    });
  }

  deleteBranchFromSelectHospital(branchId, hospitalId) {
    this.removeBranchEdit.hospitalId = hospitalId;
    this.removeBranchEdit.branchId = branchId;
    this.hospitalService.deleteBranch(this.removeBranchEdit).subscribe(data => {
      if (data.success) {
        this.hospitalService.getBranches(hospitalId).subscribe(data => {
          this.branchLists = data.message;
          for (let i = 0; i < this.branchLists.length; i++) {
            this.branchLists[i].hospitalId = hospitalId;
          }
        });
      }
    });
  }

  updateBranchEdit(newBranchEdit) {
    //console.log(newBranchEdit);
    if (newBranchEdit.newfilename) {
      const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;
      //console.log(files);
      formData.append("uploads[]", files[0], files[0]['name']);

      this.http.post('http://localhost:3000/upload', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
    }

    this.hospitalService.updateBranch(newBranchEdit).subscribe(data => {
      //console.log(data.message);
      if (data.success) {
        this.editFromHospital = false;
        this.hospitalService.getBranches(newBranchEdit.hospitalId).subscribe(data => {
          this.branchLists = data.message;
          for (let i = 0; i < this.branchLists.length; i++) {
            this.branchLists[i].hospitalId = newBranchEdit.hospitalId;
          }
        });
      }
    });
  }

  editBranchFileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.newBranchEdit.newfilename = dt + "-" + fileInput.target.files[0]['name'];
    this.newBranchEdit.newfiletype = fileInput.target.files[0]['type'];

  }

  toggleStatus(branchId) {
    this.removeBranch.hospitalId = this.currentUrl.id;
    this.removeBranch.branchId = branchId;
    this.hospitalService.toggleBranchStatus(this.removeBranch).subscribe(data => {
      this.hospitalService.getBranches(this.currentUrl.id).subscribe(data => {
        this.branchLists = data.message;
        for (let i = 0; i < this.branchLists.length; i++) {
          this.branchLists[i].hospitalId = this.currentUrl.id;
        }
      });
    });
  }

  toggleStatus1(branchId, hospitalId) {
    //console.log(branchId);
    //console.log(hospitalId);
    this.removeBranch.hospitalId = hospitalId;
    this.removeBranch.branchId = branchId;
    this.hospitalService.toggleBranchStatus(this.removeBranch).subscribe(data => {
      this.hospitalService.getBranches(this.removeBranch.hospitalId).subscribe(data => {
        this.branchLists = data.message;
        for (let i = 0; i < this.branchLists.length; i++) {
          this.branchLists[i].hospitalId = this.removeBranch.hospitalId;
        }
      });
    });
  }


  goBack() {
    this.showEditForm = false;
  }

  goBackFromEdit() {
    this.editFromHospital = false;
  }

  createRange() {
    const items: number[] = [];
    for (var i = 1; i <= 20; i++) {
      items.push(i);
    }
    return items;
  }

  ngOnInit() {
    this.createRange();
    this.branch.service = this.service;
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitalLists = data.message;
      if (this.hospitalLists.length < 1) {
        this.showAddBranchPage = false;
      } else {
        this.showAddBranchPage = true;
      }
    });

    this.currentUrl = this.activatedRoute.snapshot.params;
    if (this.currentUrl.id == undefined) {
      this.selectHospital = true;
      this.hospitalService.getHospitals().subscribe(data => {
        this.hospitalLists = data.message;
        if (this.hospitalLists.length < 1) {
          this.showAddBranchPage = false;
        }
      });
    } else {
      this.hospitalService.getSingleHospital(this.currentUrl.id).subscribe(data => {
        if (data.success) {
          this.hospitalName = data.message.hospitalName;
          this.branch.hospitalId = this.currentUrl.id;
          this.hospitalService.getBranches(this.currentUrl.id).subscribe(data => {
            this.branchLists = data.message;
          });
        }
      });
      this.selectHospital = false;
    }
  }

}
