import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-knee-primary',
  templateUrl: './knee-primary.component.html',
  styleUrls: ['./knee-primary.component.css']
})
export class KneePrimaryComponent implements OnInit {

  constructor(
    private surgeonService: SurgeonService,
    private router: Router
  ) { }


  patient_demographic = true;
  patient_preoperative = false;
  patient_radiology = false;
  patient_intraoperative = false;
  applydemographic;
  applypreoperative;
  applyradiology;
  applyintraoperative;

  demographic() {
    this.applydemographic = true;
    this.applypreoperative = false;
    this.applyradiology = false;
    this.applyintraoperative = false;
    this.patient_demographic = true;
    this.patient_preoperative = false;
    this.patient_radiology = false;
    this.patient_intraoperative = false;
  }

  patientPreOperative() {

    this.applydemographic = false;
    this.applypreoperative = true;
    this.applyradiology = false;
    this.applyintraoperative = false;
    this.patient_demographic = false;
    this.patient_preoperative = true;
    this.patient_radiology = false;
    this.patient_intraoperative = false;
  }

  radiology() {
    this.applydemographic = false;
    this.applypreoperative = false;
    this.applyradiology = true;
    this.applyintraoperative = false;
    this.patient_demographic = false;
    this.patient_preoperative = false;
    this.patient_radiology = true;
    this.patient_intraoperative = false;

  }

  intraoperative() {
    this.applydemographic = false;
    this.applypreoperative = false;
    this.applyradiology = false;
    this.applyintraoperative = true;
    this.patient_demographic = false;
    this.patient_preoperative = false;
    this.patient_radiology = false;
    this.patient_intraoperative = true;
  }

  showForm = true;
  firstname = true;
  middlename = true;
  lastname = true;
  dob = true;
  age = true;
  gender = true;
  height = true;
  weight = true;
  bmi = true;
  uhid = true;
  studyid = true;
  address = true;
  city = true;
  state = true;
  country = true;
  zipcode = true;
  telephone = true;
  phoneno = true;
  email = true;
  side = true;
  bilateraltype = true;
  combination = true;
  surgerydate = true;
  surgeonname = true;
  etiology = true;
  valgus = true;
  varus = true;
  flexion = true;


  patient = {
    hospitalId: '',
    branchId: '',
    surgeonId: '',
    firstname: '',
    middlename: '',
    lastname: '',
    dob: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    bmi: '',
    uhid: '',
    studyid: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    telephone: '',
    phoneno: '',
    email: '',
    side: '',
    bilateraltype: '',
    combination: '',
    surgerydate: '',
    surgeonname: '',
    etiology:'',
    valgus:'',
    varus:'',
    flexion:'',
    type: 'knee_primary'
  }
  getinfosurgeon = {
    hospitalId: '',
    branchId: '',
    surgeonId: ''
  }
  hospitalalias;
  applyblue;
  heightvalues = '';
  weightvalues = '';
  alias;
  bilateral = false;
  combinationvalue = false;
  disable = true;

  onKey(event: any) {
    this.patient.height = event.target.value;
  }
  bmicalucation(event: any) {
    this.heightvalues = JSON.stringify(this.patient.height);
    this.weightvalues = event.target.value;
    var bmi = JSON.parse(this.weightvalues) / (JSON.parse(this.heightvalues) / 100 * JSON.parse(this.heightvalues) / 100);
    var rbmi = bmi.toFixed(1);
    this.patient.bmi = JSON.parse(rbmi);
  }

  Surgeon_GetHospitalInfo() {
    this.getinfosurgeon.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.getinfosurgeon.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.getinfosurgeon.branchId = JSON.parse(localStorage.getItem('branchId'));
    this.surgeonService.surgeon_GetHospitalInfo(this.getinfosurgeon).subscribe(data => {
      this.alias = data.data.hospitalAlias;
      this.surgeonService.surgeon_CountValue(this.getinfosurgeon.surgeonId).subscribe(data => {
        var num = 10000000;
        var num1 = JSON.stringify(num + (data.message.length + 1));
        var num2 = num1.substr(2, 8);
        this.patient.studyid = this.alias + '' + num2;
      });
    });

  }
 

  bilateralChange(test) {
    this.bilateral = true;
    this.combinationvalue = false;
  }

  bilateraltypeChange(event) {
    this.bilateral = true;
    this.combinationvalue = true;

  }
  bilateralChange1(test) {
    this.patient.bilateraltype = '';
    this.patient.combination = '';
    this.bilateral = false;
    this.combinationvalue = false;
  }

  addPatient(patient) {
    console.log(patient);
    this.surgeonService.surgeon_AddPatient(patient).subscribe(data => {
      console.log(data);
      this.patient.firstname = '';
      this.patient.middlename = '';
      this.patient.lastname = '';
      this.patient.dob = '';
      this.patient.age = '';
      this.patient.gender = '';
      this.patient.height = '';
      this.patient.weight = '';
      this.patient.bmi = '';
      this.patient.uhid = '';
      this.patient.studyid = '';
      this.patient.address = '';
      this.patient.city = '';
      this.patient.state = '';
      this.patient.country = '';
      this.patient.zipcode = '';
      this.patient.telephone = '';
      this.patient.phoneno = '';
      this.patient.email = '';
      this.patient.side = '';
      this.patient.bilateraltype = '';
      this.patient.combination = '';
      this.firstname = false;
      this.middlename = false;
      this.lastname = false;
      this.dob = false;
      this.age = false;
      this.gender = false;
      this.height = false;
      this.weight = false;
      this.bmi = false;
      this.uhid = false;
      this.studyid = false;
      this.address = false;
      this.city = false;
      this.state = false;
      this.country = false;
      this.zipcode = false;
      this.telephone = false;
      this.phoneno = false;
      this.email = false;
      this.side = false;
      this.bilateraltype = false;
      this.combination = false;
      this.disable = false;
      this.patient_demographic = false;
      this.applypreoperative = true;
      this.patient_preoperative = true;
      // this.surgeonService.surgeon_GetLastPatientId().subscribe(data1 => {
      //   console.log(data1);
      // });
    });

  }

  ngOnInit() {
    this.Surgeon_GetHospitalInfo();
    this.patient.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.patient.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.patient.branchId = JSON.parse(localStorage.getItem('branchId'));
    this.applyblue = true;
  }

}