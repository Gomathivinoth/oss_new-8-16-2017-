import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { HospitalAdminService } from '../../../../services/hospital-admin.service';

@Component({
  selector: 'app-add-surgeon',
  templateUrl: './add-surgeon.component.html',
  styleUrls: ['./add-surgeon.component.css']
})
export class AddSurgeonComponent implements OnInit {

  constructor(
    private hospitalAdminService: HospitalAdminService,
    private router: Router,
    private http: Http
  ) { }
  hospitalId;
  branchLists;
  surgeonLists;
  showTable;
  hospitalname;
  showForm = true;
  showSurgeon = false;
  branch_name = true;
  name = true;
  reg_no = true;
  country = true;
  city = true;
  email = true;
  phone_no = true;
  username = true;
  password = true;
  image = true;

  surgeon = {
    branchId: '',
    branchAlias: '',
    hospitalId: '',
    name: '',
    regno: '',
    city: '',
    country: '',
    email: '',
    phoneno: '',
    username: '',
    password: '',
    filename: '',
    filetype: ''
  }

  editSurgeon = {
    userId: '',
    branchId: '',
    hospitalId: '',
    editname: '',
    editregno: '',
    editcity: '',
    editcountry: '',
    editemail: '',
    editphoneno: '',
    editusername: '',
    editpassword: '',
    filename: '',
    editfilename: '',
    editfiletype: ''
  }

  filesToUpload: Array<File> = [];
  getHospitalInfo() {
    this.hospitalId = localStorage.getItem('hospitalId');
    //console.log(this.hospitalId);
    this.hospitalId = JSON.parse(this.hospitalId);
    this.hospitalAdminService.getHospitalInfo(this.hospitalId).subscribe(data => {
      if (!data.success) {
        alert('Something went wrong!');
      } else {
        this.branchLists = data.message.branchDetails;
        this.hospitalname = data.message.hospitalName;
        this.surgeon.branchAlias = data.message.hospitalAlias;
        this.surgeon.hospitalId = data.message._id;

      }
    });
  }

  showBranchName(id) {
    //console.log(id);
    this.showSurgeon = true;
    this.hospitalAdminService.getSurgeonInfo(id).subscribe(data => {
      this.surgeonLists = data.message;
      if (this.surgeonLists.length < 1) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }
    });

  }
  addSurgeon(surgeon) {
    this.hospitalAdminService.hospital_AddSurgeon(surgeon).subscribe(data => {
      this.surgeon.name = '';
      this.surgeon.regno = '';
      this.surgeon.city = '';
      this.surgeon.country = '';
      this.surgeon.email = '';
      this.surgeon.phoneno = '';
      this.surgeon.username = '';
      this.surgeon.password = '';
      this.branch_name = false;
      this.name = false;
      this.reg_no = false;
      this.country = false;
      this.city = false;
      this.email = false;
      this.phone_no = false;
      this.username = false;
      this.password = false;
      this.image = false;
      const id = surgeon.branchId;
      this.showBranchName(id);
    });
  }

  fileChangeEvent(fileInput: any) {

     let age = new Date();
    this.surgeon.filename = "sugeon_" + Number(age) + fileInput.target.files[0]['name'];
    this.surgeon.filetype  = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    formData.append("Name", "sugeon_");
    formData.append("Age", Number(age));
    formData.append("uploads[]", files[0], files[0]['name']);

    this.hospitalAdminService.uploadImage(formData).subscribe(data => {
    });
  }

  editSurgeons(id) {
    this.showForm = false;
    this.hospitalAdminService.getSingleUserDetail(id).subscribe(data => {
      this.editSurgeon.editname = data.message.name;
      this.editSurgeon.editregno = data.message.regno;
      this.editSurgeon.editcity = data.message.city;
      this.editSurgeon.editcountry = data.message.country;
      this.editSurgeon.editemail = data.message.email;
      this.editSurgeon.editphoneno = data.message.phoneno;
      this.editSurgeon.editusername = data.message.username;
      this.editSurgeon.editpassword = data.message.password;
      this.editSurgeon.filename = data.message.fileName;
      this.editSurgeon.hospitalId = data.message.hospitalId;
      this.editSurgeon.branchId = data.message.branchId;
      this.editSurgeon.userId = data.message._id;
    });

  }

  updateSurgeon(editSurgeon) {
   
    this.hospitalAdminService.updateUserDetail(editSurgeon).subscribe(data => {
      this.showForm = true;
      const id = editSurgeon.hospitalId + '-' + editSurgeon.branchId;
      this.showBranchName(id);
    });
  }

  editFileChangeEvent(fileInput: any) {
     let age = new Date();
    this.editSurgeon.editfilename  = "sugeon_" + Number(age) + fileInput.target.files[0]['name'];
    this.editSurgeon.editfiletype  = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    formData.append("Name", "sugeon_");
    formData.append("Age", Number(age));
    formData.append("uploads[]", files[0], files[0]['name']);

    this.hospitalAdminService.uploadImage(formData).subscribe(data => {
    });

  }

  deleteSurgeons(id) {
    //console.log(id);
    this.hospitalAdminService.deleteUserDetails(id).subscribe(data => {
      const id = data.data + '-' + data.data1;
      this.showBranchName(id);
    });
  }

  toggleStatus(user) {
   // console.log(user);
    this.hospitalAdminService.toggleUserStatus(user).subscribe(data => {
      const id = user.hospitalId + "-" + user.branchId;
     // console.log(id);
      this.showBranchName(id);
    });
  }

  goBack() {
    this.showForm = true;
  }

  ngOnInit() {
    this.getHospitalInfo();
  }

}
