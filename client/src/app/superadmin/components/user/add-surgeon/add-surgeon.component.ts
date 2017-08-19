import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'app-add-surgeon',
  templateUrl: './add-surgeon.component.html',
  styleUrls: ['./add-surgeon.component.css']
})
export class AddSurgeonComponent implements OnInit {

  currentUrl;
  selectHospital;
  hospitalName;
  hospitalId;
  hospitalLists;
  showAddSurgeon = false;
  showAddSurgeon1 = false;
  surgeonList;
  selectBranch = false;
  branchLists;
  showTable;
  branch_name = true;
  hos_name = true;
  reg_no = true;
  country = true;
  city = true;
  email = true;
  phone_no = true;
  username = true;
  password = true;

  surgeon = {
    branchId: '',
    hospitalId: '',
    regno: '',
    city: '',
    country: '',
    email: '',
    phoneno: '',
    username: '',
    password: ''
  }

  editAdmin = {
    editbranchid: '',
    edituserid: '',
    edithospitalId: '',
    editregno: '',
    editemail:'',
    editcity:'',
    editcountry:'',
    editphoneno:'',
    editusername: '',
    editpassword: ''
  }

  hospital = {
    hospitalAlias:''
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
    const [hospital_id, branch_id] = id.split('-');
    this.showAddSurgeon = true;
    this.hospitalService.getBranchUserDetails(id).subscribe(data => {
      console.log(data.message);
      this.surgeonList = data.message;
      //console.log(data.message);
      if (this.surgeonList.length < 1) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }

    });
    this.hospitalService.getHospitalDetails(hospital_id).subscribe(data => {
      this.hospital.hospitalAlias = data.message1.hospitalAlias;
    });
  }

  addSurgeon(surgeon) {
    console.log(surgeon);
    this.hospitalService.addSurgeon(surgeon).subscribe(data => {
      this.surgeon.regno = '';
      this.surgeon.email = '';
      this.surgeon.city = '';
      this.surgeon.country = '';
      this.surgeon.phoneno = '';
      this.surgeon.username = '';
      this.surgeon.password = '';
      this.branch_name = false;
      this.hos_name = false;
      this.reg_no = false;
      this.country = false;
      this.city = false;
      this.email = false;
      this.phone_no = false;
      this.username = false;
      this.password = false;
      const [hospital_id, branch_id] = surgeon.branchId.split('-');
      const id = surgeon.hospitalId + "-" + branch_id;
      //console.log(id);
      this.showAddBranchName(id);
    });
  }

  deleteSurgeon(id) {
    this.hospitalService.deleteHospitalAdmin(id).subscribe(data => {
      const id = data.data + "-" + data.data1;
      this.showAddBranchName(id);
    });
  }

  editSurgeon(id) {
    //console.log(id);
    this.selectHospital = false;
    this.showAddSurgeon1 = true;
    this.hospitalService.getSingleUser(id).subscribe(data => {
      console.log(data.message);
      this.editAdmin.edithospitalId = data.message.hospitalId;
      this.editAdmin.editregno = data.message.regno;
      this.editAdmin.editcity = data.message.city;
      this.editAdmin.editcountry = data.message.country;
      this.editAdmin.editemail = data.message.email;
      this.editAdmin.editphoneno = data.message.phoneno;
      this.editAdmin.editusername = data.message.username;
      this.editAdmin.editpassword = data.message.password;
      this.editAdmin.edituserid = data.message._id;
      this.editAdmin.editbranchid = data.message.branchId;
      console.log(this.editAdmin);
    });
  }
  updatesurgeon(editAdmin) {
    this.hospitalService.updateHospitalAdmin(editAdmin).subscribe(data => {
      this.showAddSurgeon1 = false;
      this.selectHospital = true;
      const id = editAdmin.edithospitalId + "-" + editAdmin.editbranchid;
      console.log(id);
      this.showAddBranchName(id);

    });
  }
  goBack() {
    this.showAddSurgeon1 = false;
    this.selectHospital = true;
  }
  toggleStatus(user){
    console.log(user);
    this.hospitalService.toggleUserStatus(user).subscribe(data => {
      const id = user.hospitalId+"-"+user.branchId;
        console.log(id);
       this.showAddBranchName(id);
    });
  }
  ngOnInit() {

    this.selectHospital = true;
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitalLists = data.message;
    });

  }

}
