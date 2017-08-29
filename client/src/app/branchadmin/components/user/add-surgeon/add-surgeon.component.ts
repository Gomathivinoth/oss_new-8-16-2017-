import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { BranchAdminService } from '../../../../services/branch-admin.service';

@Component({
  selector: 'app-add-surgeon',
  templateUrl: './add-surgeon.component.html',
  styleUrls: ['./add-surgeon.component.css']
})
export class AddSurgeonComponent implements OnInit {

  constructor(
    private branchAdminService: BranchAdminService,
    private router: Router,
    private http: Http
  ) { }

  surgeonLists;
  showTable;
  showForm = true;
  name = true;
  reg_no = true;
  country = true;
  city = true;
  email = true;
  phone_no = true;
  username = true;
  password = true;
  image = true;

  getdetail = {
    hospitalId: '',
    branchId: '',
    hospitalName: '',
    branchName: '',
    hospitalAlias: ''
  }

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
    this.getdetail.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.getdetail.branchId = JSON.parse(localStorage.getItem('branchId'));
    // console.log(this.getdetail);
    this.branchAdminService.getHospitalBranchInfo(this.getdetail).subscribe(data => {
      //   console.log(data);
      if (!data.success) {
        alert('Something went wrong!');
      } else {
        this.getdetail.hospitalName = data.data.hospitalName;
        this.getdetail.branchName = data.message.branchName;
        this.surgeon.branchAlias = data.data.hospitalAlias;
        this.surgeon.hospitalId = data.data._id;
        this.surgeon.branchId = data.message._id;
      }
    });
  }

  branchGetUserList() {
    this.getdetail.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.getdetail.branchId = JSON.parse(localStorage.getItem('branchId'));
    // console.log(this.getdetail);
    this.branchAdminService.branchGetUserList(this.getdetail).subscribe(data => {
      this.surgeonLists = data.message;
      if (this.surgeonLists.length < 1) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }
    });
  }

  addSurgeon(surgeon) {
    //  console.log(surgeon);
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("uploads[]", files[0], files[0]['name']);

    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
    this.branchAdminService.branch_AddSurgeon(surgeon).subscribe(data => {
      //console.log(data);
      this.surgeon.name = '';
      this.surgeon.regno = '';
      this.surgeon.city = '';
      this.surgeon.country = '';
      this.surgeon.email = '';
      this.surgeon.phoneno = '';
      this.surgeon.username = '';
      this.surgeon.password = '';
      this.name = false;
      this.reg_no = false;
      this.country = false;
      this.city = false;
      this.email = false;
      this.phone_no = false;
      this.username = false;
      this.password = false;
      this.image = false;
      this.branchGetUserList();
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.surgeon.filename = dt + "-" + fileInput.target.files[0]['name'];
    this.surgeon.filetype = fileInput.target.files[0]['type'];
  }

  editSurgeons(id) {
    this.showForm = false;
    this.branchAdminService.branch_GetSingleUserDetail(id).subscribe(data => {
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
    if (editSurgeon.editfilename) {
      const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;
      //console.log(files);
      formData.append("uploads[]", files[0], files[0]['name']);

      this.http.post('http://localhost:3000/upload', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
    }
    this.branchAdminService.branch_updateUserDetail(editSurgeon).subscribe(data => {
      this.showForm = true;
      this.branchGetUserList();
    });
  }

  editFileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.editSurgeon.editfilename = dt + "-" + fileInput.target.files[0]['name'];
    this.editSurgeon.editfiletype = fileInput.target.files[0]['type'];

  }

  deleteSurgeons(id) {
    // console.log(id);
    this.branchAdminService.branch_DeleteUserDetails(id).subscribe(data => {
      this.branchGetUserList();
    });
  }

  toggleStatus(user) {
    //console.log(user);
    this.branchAdminService.branch_ToggleUserStatus(user).subscribe(data => {
      this.branchGetUserList();
    });
  }

  goBack() {
    this.showForm = true;
  }


  ngOnInit() {
    this.getHospitalInfo();
    this.branchGetUserList();
  }

}
