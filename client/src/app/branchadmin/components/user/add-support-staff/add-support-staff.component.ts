import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { BranchAdminService } from '../../../../services/branch-admin.service';

@Component({
  selector: 'app-add-support-staff',
  templateUrl: './add-support-staff.component.html',
  styleUrls: ['./add-support-staff.component.css']
})
export class AddSupportStaffComponent implements OnInit {

  constructor(
    private branchAdminService: BranchAdminService,
    private router: Router,
    private http: Http
  ) { }

  showForm = true;
  SurgeonName;
  supportLists;
  showTable;
  showSupport = false;
    surgeon_name = true;
  name = true;
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

  supportStaff = {
    hospitalId: '',
    branchId: '',
    surgeonId: '',
    surgeonName: '',
    hospitalbranchId: '',
    name: '',
    email: '',
    phoneno: '',
    username: '',
    password: '',
    filename:'',
    filetype:''
  }

  editSupport = {
    userId: '',
    branchId: '',
    hospitalId: '',
    surgeonId: '',
    editname: '',
    editemail: '',
    editphoneno: '',
    editusername: '',
    editpassword: '',
    filename:'',
    editfilename:'',
    editfiletype:''
  }

  filesToUpload: Array<File> = [];

  getHospitalInfo() {
    this.getdetail.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.getdetail.branchId = JSON.parse(localStorage.getItem('branchId'));
    //console.log(this.getdetail);
    this.branchAdminService.getHospitalBranchInfo(this.getdetail).subscribe(data => {
     // console.log(data);
      if (!data.success) {
        alert('Something went wrong!');
      } else {
        this.getdetail.hospitalName = data.data.hospitalName;
        this.getdetail.branchName = data.message.branchName;
        // this.surgeon.branchAlias = data.data.hospitalAlias;
        // this.surgeon.hospitalId = data.data._id;
        // this.surgeon.branchId = data.message._id;
      }
    });
  }

branch_GetsurgeonName() {
  this.getdetail.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
  this.getdetail.branchId = JSON.parse(localStorage.getItem('branchId'));
  this.branchAdminService.branch_GetsurgeonName(this.getdetail).subscribe(data => {
    this.SurgeonName = data.message;

  });

}
showSurgeonName(id){
  this.supportStaff.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
  this.supportStaff.branchId = JSON.parse(localStorage.getItem('branchId'));
  this.supportStaff.surgeonId = id;
  this.branchAdminService.branch_GetSurpportList(this.supportStaff).subscribe(data => {
  this.showSupport = true;
  this.supportLists = data.message;
   if (this.supportLists.length < 1) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }

  });
}


  addSupport(supportStaff) {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("uploads[]", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
    this.branchAdminService.branch_AddSupportStaff(supportStaff).subscribe(data => {
      console.log(data);
      this.supportStaff.name = '';
      this.supportStaff.email = '';
      this.supportStaff.phoneno = '';
      this.supportStaff.username = '';
      this.supportStaff.password = '';
      this.surgeon_name = false;
      this.name = false;
      this.email = false;
      this.phone_no = false;
      this.username = false;
      this.password = false;
      this.image = false;
      this.showSurgeonName(supportStaff.surgeonId);
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.supportStaff.filename = dt + "-" + fileInput.target.files[0]['name'];
    this.supportStaff.filetype = fileInput.target.files[0]['type'];
  }

   deleteSupportStaff(staff) {
    const id = staff._id;
    this.branchAdminService.branch_DeleteUserDetails(id).subscribe(data => {
       this.showSurgeonName(staff.surgeonId);
    });
  }

   editSupportStaff(id) {
    this.showForm = false;
    this.branchAdminService.branch_GetSingleUserDetail(id).subscribe(data => {
      this.editSupport.editname = data.message.name;
      this.editSupport.editemail = data.message.email;
      this.editSupport.editphoneno = data.message.phoneno;
      this.editSupport.editusername = data.message.username;
      this.editSupport.editpassword = data.message.password;
      this.editSupport.filename = data.message.fileName;
      this.editSupport.hospitalId = data.message.hospitalId;
      this.editSupport.branchId = data.message.branchId;
      this.editSupport.surgeonId = data.message.surgeonId;
      this.editSupport.userId = data.message._id;
    });

  }

  updateSupport(editSupport) {
     this.branchAdminService.branch_updateUserDetail(editSupport).subscribe(data => {
      this.showForm = true;
      this.showSurgeonName(editSupport.surgeonId);
    });
  }

   editFileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.editSupport.editfilename = dt + "-" + fileInput.target.files[0]['name'];
    this.editSupport.editfiletype = fileInput.target.files[0]['type'];

  }

  toggleStatus(user) {
    this.branchAdminService.branch_ToggleUserStatus(user).subscribe(data => {
      this.showSurgeonName(user.surgeonId);
    });
  }

  goBack() {
    this.showForm = true;
  }

  ngOnInit() {
    this.getHospitalInfo();
    this.branch_GetsurgeonName();
  }

}
