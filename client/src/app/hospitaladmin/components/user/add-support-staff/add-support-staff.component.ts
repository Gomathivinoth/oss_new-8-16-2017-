import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalAdminService } from '../../../../services/hospital-admin.service';

@Component({
  selector: 'app-add-support-staff',
  templateUrl: './add-support-staff.component.html',
  styleUrls: ['./add-support-staff.component.css']
})
export class AddSupportStaffComponent implements OnInit {

  constructor(
    private hospitalAdminService: HospitalAdminService,
    private router: Router
  ) { }

  hospitalId;
  branchLists;
  hospitalname;
  surgeonName;
  surgeonLists;
  supportLists;
  showTable;
  showForm = true;
  showSurgeon = false;
  showSupport = false;
  branch_name = true;
  surgeon_name = true;
  name = true;
  email = true;
  phone_no = true;
  username = true;
  password = true;

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
    password: ''
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
    editpassword: ''
  }

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
        //this.surgeon.branchAlias = data.message.hospitalAlias;
        this.supportStaff.hospitalId = data.message._id;

      }
    });
  }

  showBranchName(id) {
    this.showSurgeon = true;
    this.hospitalAdminService.getSurgeonList(id).subscribe(data => {
      this.surgeonLists = data.message;
      this.supportStaff.hospitalbranchId = id;
    });

  }
  showSurgeonName(id) {
    const [hospital_id, branch_id, surgeon_id] = id.split('-');
    this.showSupport = true;
    this.hospitalAdminService.getSupportStaffInfo(id).subscribe(data => {
      this.supportLists = data.message;
      if (this.supportLists.length < 1) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }

    });
    this.hospitalAdminService.getSingleUserDetail(surgeon_id).subscribe(data => {
      this.supportStaff.surgeonName = data.message.name;
    });
  }

  addSupport(supportStaff) {
    this.hospitalAdminService.hospital_AddSupportStaff(supportStaff).subscribe(data => {
      this.supportStaff.name = '';
      this.supportStaff.email = '';
      this.supportStaff.phoneno = '';
      this.supportStaff.username = '';
      this.supportStaff.password = '';
      this.branch_name = false;
      this.surgeon_name = false;
      this.name = false;
      this.email = false;
      this.phone_no = false;
      this.username = false;
      this.password = false;
      this.showSurgeonName(supportStaff.surgeonId);
    });
  }

  editSupportStaff(id) {
    this.showForm = false;
    this.hospitalAdminService.getSingleUserDetail(id).subscribe(data => {
      this.editSupport.editname = data.message.name;
      this.editSupport.editemail = data.message.email;
      this.editSupport.editphoneno = data.message.phoneno;
      this.editSupport.editusername = data.message.username;
      this.editSupport.editpassword = data.message.password;
      this.editSupport.hospitalId = data.message.hospitalId;
      this.editSupport.branchId = data.message.branchId;
      this.editSupport.surgeonId = data.message.surgeonId;
      this.editSupport.userId = data.message._id;
    });

  }

  updateSupport(editSupport) {
    this.hospitalAdminService.updateUserDetail(editSupport).subscribe(data => {
      this.showForm = true;
      const id = editSupport.hospitalId + '-' + editSupport.branchId + '-' + editSupport.surgeonId;
      this.showSurgeonName(id);
    });
  }

  deleteSupportStaff(id) {
    console.log(id);
    this.hospitalAdminService.deleteUserDetails(id).subscribe(data => {
      const id = data.data + '-' + data.data1 + '-' + data.data2;
      this.showSurgeonName(id);
    });
  }

  toggleStatus(user) {
    console.log(user);
    this.hospitalAdminService.toggleUserStatus(user).subscribe(data => {
      const id = user.hospitalId + "-" + user.branchId + "-" + user.surgeonId;
      console.log(id);
      this.showSurgeonName(id);
    });
  }

  goBack() {
    this.showForm = true;
  }


  ngOnInit() {
    this.getHospitalInfo();
  }

}
