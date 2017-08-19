import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../../../../services/hospital.service';
@Component({
  selector: 'app-add-support-staff',
  templateUrl: './add-support-staff.component.html',
  styleUrls: ['./add-support-staff.component.css']
})

export class AddSupportStaffComponent implements OnInit {

  currentUrl;
  selectHospital;
  hospitalName;
  hospitalId;
  hospitalLists;
  showAddSupportStaff = false;
  showAddSupportStaff1 = false;
  selectSurgeon = false;
  supportStaffList;
  selectBranch = false;
  branchLists;
  supportList;
  showTable;
  hospitalbranchId;
  hos_name = true;
  branch_name = true;
  surgeon_name = true;
  name = true;
  email = true;
  phone_no = true;
  username = true;
  password = true;

  supportStaff = {
    branchId: '',
    hospitalId: '',
    name: '',
    email:'',
    phoneno:'',
    username: '',
    password: ''
  }

  surgeon = {
    surgeonName: ''
  }

  editAdmin = {
    editsurgeonid: '',
    editbranchid: '',
    edituserid: '',
    edithospitalId: '',
    editname: '',
    editemail:'',
    editphoneno:'',
    editusername: '',
    editpassword: ''
  }

  constructor(
    private hospitalService: HospitalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  showAddHospitalName(id) {
    this.selectBranch = true;
    this.hospitalService.getBranches(id).subscribe(data => {
      this.branchLists = data.message;
      this.hospitalId = id;
    });
  }
  showAddBranchName(id) {
    //console.log(id);
    this.selectSurgeon = true;
    this.hospitalService.getSurgeon(id).subscribe(data => {
      this.supportList = data.message;
      this.hospitalbranchId = id;
    });
  }

  showAddSurgeonName(id) {
    const [hospital_id, branch_id, surgeon_id] = id.split('-');
    this.showAddSupportStaff = true;
    this.hospitalService.getBranchSurgeonDetails(id).subscribe(data => {
      this.supportStaffList = data.message;
      if (this.supportStaffList.length < 1) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }

    });
    this.hospitalService.getSingleUser(surgeon_id).subscribe(data => {
      this.surgeon.surgeonName = data.message.name;

    });
  }

  addSupportStaff(supportStaff) {
    //console.log(supportStaff);
    this.hospitalService.addSupportStaff(supportStaff).subscribe(data => {
      //console.log(data.message);
      this.supportStaff.name = '';
      this.supportStaff.email = '';
      this.supportStaff.phoneno = '';
      this.supportStaff.username = '';
      this.supportStaff.password = '';
      this.hos_name = false;
      this.branch_name = false;
      this.surgeon_name = false;
      this.name = false;
      this.email = false;
      this.phone_no = false;
      this.username = false;
      this.password = false;
      const [hospital_id, branch_id, surgeon_id] = supportStaff.surgeonId.split('-');
      const id = hospital_id + "-" + branch_id + "-" + surgeon_id;
      this.showAddSurgeonName(id);

    });
  }
  deleteSupportStaff(id) {
    this.hospitalService.deleteHospitalAdmin(id).subscribe(data => {
      const id = data.data + "-" + data.data1 + "-" + data.data2;
      this.showAddSurgeonName(id);
    });
  }

  editSupportStaff(id) {
    //console.log(id);
    this.selectHospital = false;
    this.showAddSupportStaff1 = true;
    this.hospitalService.getSingleUser(id).subscribe(data => {
      console.log(data.message);
      this.editAdmin.edithospitalId = data.message.hospitalId;
      this.editAdmin.editname = data.message.name;
      this.editAdmin.editemail = data.message.email;
      this.editAdmin.editphoneno = data.message.phoneno;
      this.editAdmin.editusername = data.message.username;
      this.editAdmin.editpassword = data.message.password;
      this.editAdmin.edituserid = data.message._id;
      this.editAdmin.editbranchid = data.message.branchId;
      this.editAdmin.editsurgeonid = data.message.surgeonId;
      console.log(this.editAdmin);
    });
  }

  updateSupportStaff(editAdmin) {
    this.hospitalService.updateHospitalAdmin(editAdmin).subscribe(data => {
      this.showAddSupportStaff1 = false;
      this.selectHospital = true;
      const id = editAdmin.edithospitalId + "-" + editAdmin.editbranchid + "-" + editAdmin.editsurgeonid;
      console.log(id);
      this.showAddSurgeonName(id);

    });
  }
   toggleStatus(user){
    console.log(user);
    this.hospitalService.toggleUserStatus(user).subscribe(data => {
      const id = user.hospitalId+"-"+user.branchId + "-" +user.surgeonId;
        console.log(id);
       this.showAddBranchName(id);
    });
  }
  goBack() {
    this.showAddSupportStaff1 = false;
    this.selectHospital = true;
  }

  ngOnInit() {

    this.selectHospital = true;
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitalLists = data.message;
    });

  }

}
