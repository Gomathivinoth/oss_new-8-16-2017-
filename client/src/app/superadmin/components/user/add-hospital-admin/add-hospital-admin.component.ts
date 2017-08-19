
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'app-add-hospital-admin',
  templateUrl: './add-hospital-admin.component.html',
  styleUrls: ['./add-hospital-admin.component.css']
})
export class AddHospitalAdminComponent implements OnInit {

  currentUrl;
  selectHospital;
  hospitalName;
  hospitalId;
  hospitalLists;
  showAddHospitalAdmin = false;
  showAddHospitalAdmin1 = false;
  hospitalAdminList;
  showTable;
  hos_name = true;
  name = true;
  gender = true;
  email = true;
  phone_no = true;
  tech_no = true;
  username = true;
  password = true;

  hospital = {
    hospitalAlias: '',
    hospitalAddress: ''
  }
  hospitalAdmin = {
    hospitalId: '',
    name: '',
    gender: '',
    email: '',
    phoneno: '',
    technicalno: '',
    username: '',
    password: ''
  }

  editAdmin = {
    edituserid: '',
    edithospitalId: '',
    editname: '',
    editgender: '',
    editemail:'',
    editphoneno:'',
    edittechno:'',
    editusername: '',
    editpassword: ''
  }



  constructor(
    private hospitalService: HospitalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  showAddHospitalName(id) {
    this.showAddHospitalAdmin = true;
    this.hospitalService.getUserDetails(id).subscribe(data => {
      this.hospitalAdminList = data.message;
      console.log(this.hospitalAdminList.length);
      if (this.hospitalAdminList.length < 1) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }

    });
    this.hospitalService.getHospitalDetails(id).subscribe(data => {
      this.hospital.hospitalAlias = data.message1.hospitalAlias;
      this.hospital.hospitalAddress = data.message1.hospitalAddress;
    });
  }
  addHospitalAdmin(hospitalAdmin) {
    console.log(hospitalAdmin);
    this.hospitalService.addHospitalAdmin(hospitalAdmin).subscribe(data => {
      //  console.log(data.message);
      this.hospitalAdmin.name = '';
      this.hospitalAdmin.gender = '';
      this.hospitalAdmin.email = '';
      this.hospitalAdmin.phoneno = '';
      this.hospitalAdmin.technicalno = '';
      this.hospitalAdmin.username = '';
      this.hospitalAdmin.password = '';
      this.hos_name = false;
      this.name = false;
      this.gender = false;
      this.email = false;
      this.phone_no = false;
      this.tech_no = false;
      this.username = false;
      this.password = false;
      this.showAddHospitalName(hospitalAdmin.hospitalId);
    });
  }

  deleteHospitalAdmin(id) {
    this.hospitalService.deleteHospitalAdmin(id).subscribe(data => {
      this.showAddHospitalName(data.data);
    });
  }

  editHospitalAdmin(id) {
    //console.log(id);
    this.selectHospital = false;
    this.showAddHospitalAdmin1 = true;
    this.hospitalService.getSingleUser(id).subscribe(data => {
      console.log(data.message);
      this.editAdmin.edithospitalId = data.message.hospitalId;
      this.editAdmin.editname = data.message.name;
      this.editAdmin.editgender = data.message.gender;
      this.editAdmin.editemail = data.message.email;
      this.editAdmin.editphoneno = data.message.phoneno;
      this.editAdmin.edittechno = data.message.technicalno;
      this.editAdmin.editusername = data.message.username;
      this.editAdmin.editpassword = data.message.password;
      this.editAdmin.edituserid = data.message._id;
      console.log(this.editAdmin);
    });
  }


  updateHospitalAdmin(editAdmin) {
    this.hospitalService.updateHospitalAdmin(editAdmin).subscribe(data => {
      this.showAddHospitalAdmin1 = false;
      this.selectHospital = true;
      this.showAddHospitalName(editAdmin.edithospitalId);

    });
  }

  goBack() {
    this.showAddHospitalAdmin1 = false;
    this.selectHospital = true;
  }
  toggleStatus(user){
    console.log(user);
    this.hospitalService.toggleUserStatus(user).subscribe(data => {
      const id = user.hospitalId;
        console.log(id);
       this.showAddHospitalName(id);
    });
  }
  ngOnInit() {

    this.selectHospital = true;
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitalLists = data.message;
    });

  }

}
