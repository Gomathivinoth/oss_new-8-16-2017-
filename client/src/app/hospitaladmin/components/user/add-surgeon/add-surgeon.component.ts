import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalAdminService } from '../../../../services/hospital-admin.service';

@Component({
  selector: 'app-add-surgeon',
  templateUrl: './add-surgeon.component.html',
  styleUrls: ['./add-surgeon.component.css']
})
export class AddSurgeonComponent implements OnInit {

  constructor(
    private hospitalAdminService: HospitalAdminService,
    private router: Router
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
    password: ''
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
    editpassword: ''
  }

  getHospitalInfo() {
    this.hospitalId = localStorage.getItem('hospitalId');
    console.log(this.hospitalId);
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
    console.log(id);
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
    console.log(surgeon);
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
      const id = surgeon.branchId;
      this.showBranchName(id);
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

  deleteSurgeons(id) {
    console.log(id);
    this.hospitalAdminService.deleteUserDetails(id).subscribe(data => {
      const id = data.data + '-' + data.data1;
      this.showBranchName(id);
    });
  }

  toggleStatus(user) {
    console.log(user);
    this.hospitalAdminService.toggleUserStatus(user).subscribe(data => {
      const id = user.hospitalId + "-" + user.branchId;
      console.log(id);
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
