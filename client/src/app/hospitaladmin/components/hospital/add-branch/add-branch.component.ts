import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HospitalAdminService } from '../../../../services/hospital-admin.service';

@Component({
  selector: 'add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(
    private hospitalAdminService: HospitalAdminService,
    private router: Router,
    private http: Http
  ) { }
  hospitalId;
  hospitalname;
  branch_type = true;
  branch_name = true;
  branch_address = true;
  branch_phone = true;
  branch_email = true;
  branch_website = true;
  branch_surgeon = true;
  branch_support = true;
  image = true;
  showForm = true;
  showTable;
  branchLists;

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
  }
  editbranch = {
    hospitalId: '',
    branchId: '',
    editbranchAlias: '',
    editbranchType: '',
    editname: '',
    editaddress: '',
    editphoneno: '',
    editemail: '',
    editwebsite: '',
    noOfSurgeons: '',
    noOfSupportStaffs: '',
    filename: '',
    editfilename: '',
    editfiletype: '',
    service: [{
      'serviceName': String,
      'selected': Boolean,
    }]
  }

  deletebranch = {
    hospitalId: '',
    branchId: ''
  }

  service: any = [
    { 'serviceName': 'Knee', 'selected': false },
    { 'serviceName': 'Hip', 'selected': false },
    { 'serviceName': 'ACL', 'selected': false },
    { 'serviceName': 'PCL', 'selected': false },
    { 'serviceName': 'Spine', 'selected': false },
    { 'serviceName': 'All', 'selected': false }
  ];

  filesToUpload: Array<File> = [];

  getHospitalInfo() {
    this.hospitalId = localStorage.getItem('hospitalId');
    // console.log(this.hospitalId);
    this.hospitalId = JSON.parse(this.hospitalId);
    this.hospitalAdminService.getHospitalInfo(this.hospitalId).subscribe(data => {
      if (!data.success) {
        alert('Something went wrong!');
      } else {
        this.branchLists = data.message.branchDetails;
        this.hospitalname = data.message.hospitalName;
        this.branch.branchAlias = data.message.hospitalAlias;
        this.branch.hospitalId = data.message._id;
        // console.log(this.branch.hospitalId);
        if (this.branchLists.length < 1) {
          this.showTable = false;
        } else {
          this.showTable = true;
        }
      }
    });
  }


  addBranch(branch) {
    // console.log(branch);
    this.hospitalAdminService.hospital_AddBranch(branch).subscribe(data => {
      // console.log(data);
      this.branch.branchType = '';
      this.branch.branchName = '';
      this.branch.branchAddress = '';
      this.branch.branchPhoneno = '';
      this.branch.branchEmail = '';
      this.branch.branchWebsite = '';
      this.branch.noOfSurgeons = '';
      this.branch.noOfSupportStaffs = '';
      this.branch_type = false;
      this.branch_name = false;
      this.branch_address = false;
      this.branch_phone = false;
      this.branch_email = false;
      this.branch_website = false;
      this.branch_surgeon = false;
      this.branch_support = false;
      this.image = false;
      this.getHospitalInfo();
    });
  }

  fileChangeEvent(fileInput: any) {
     let age = new Date();
    this.branch.filename = "branch_" + Number(age) + fileInput.target.files[0]['name'];
    this.branch.filetype = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    formData.append("Name", "branch_");
    formData.append("Age", Number(age));
    formData.append("uploads[]", files[0], files[0]['name']);

    this.hospitalAdminService.uploadImage(formData).subscribe(data => {
    });
  }

  editBranch(branchId, hospitalId) {
    this.editbranch.hospitalId = hospitalId;
    this.editbranch.branchId = branchId;
    this.showForm = false;
    this.hospitalAdminService.hospital_EditBranch(this.editbranch).subscribe(data => {
      // console.log(data.message);
      if (data.success) {
        this.editbranch.branchId = data.message._id;
        this.editbranch.editbranchAlias = data.message.branchAlias;
        this.editbranch.editbranchType = data.message.branchType;
        this.editbranch.editname = data.message.branchName;
        this.editbranch.editaddress = data.message.branchAddress;
        this.editbranch.editphoneno = data.message.branchPhoneno;
        this.editbranch.editemail = data.message.branchEmail;
        this.editbranch.editwebsite = data.message.branchWebsite;
        this.editbranch.noOfSurgeons = data.message.noOfSurgeons;
        this.editbranch.noOfSupportStaffs = data.message.noOfSupportStaffs;
        this.editbranch.service = data.message.service;
        this.editbranch.filename = data.message.fileName;
        this.editbranch.hospitalId = hospitalId;
      }
    });
  }

  updateBranch(editbranch) {
    //  console.log(editbranch);
   
    this.showForm = true;
    this.hospitalAdminService.hospital_UpdateBranch(this.editbranch).subscribe(data => {
      //console.log(data);
      this.getHospitalInfo();
    });

  }


  editFileChangeEvent(fileInput: any) {

     let age = new Date();
    this.editbranch.editfilename = "branch_" + Number(age) + fileInput.target.files[0]['name'];
    this.editbranch.editfiletype = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    formData.append("Name", "branch_");
    formData.append("Age", Number(age));
    formData.append("uploads[]", files[0], files[0]['name']);

    this.hospitalAdminService.uploadImage(formData).subscribe(data => {
    });

  }
  deleteBranch(branchId, hospitalId) {
    //console.log(hospitalId);
    this.deletebranch.hospitalId = hospitalId;
    this.deletebranch.branchId = branchId;
    this.hospitalAdminService.hospital_DeleteBranch(this.deletebranch).subscribe(data => {
      this.getHospitalInfo();

    });
  }

  toggleStatus(branchId, hospitalId) {
    this.deletebranch.hospitalId = hospitalId;
    this.deletebranch.branchId = branchId;
    this.hospitalAdminService.toggleHospitalStatus(this.deletebranch).subscribe(data => {
      this.getHospitalInfo();
    });
  }

  goBack() {
    this.showForm = true;
  }

  createRange() {
    const items: number[] = [];
    for (var i = 1; i <= 20; i++) {
      items.push(i);
    }
    return items;
  }

  ngOnInit() {
    this.getHospitalInfo();
    this.createRange();
    this.branch.service = this.service;
  }

}
