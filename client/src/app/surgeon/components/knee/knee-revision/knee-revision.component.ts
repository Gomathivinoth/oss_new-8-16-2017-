import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-knee-revision',
  templateUrl: './knee-revision.component.html',
  styleUrls: ['./knee-revision.component.css']
})
export class KneeRevisionComponent implements OnInit {

 constructor(
    private surgeonService: SurgeonService,
    private router: Router
  ) { }

  tab = 0;

  setTab(num: number) {
    if (num >= 2) {
      this.applyblue = false;
    } else {
      this.applyblue = true;
    }
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
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
    type: 'knee_revision'
  }
  applyblue;
  heightvalues = '';
  weightvalues = '';
  alias;
  getinfosurgeon = {
    hospitalId: '',
    branchId: '',
    surgeonId: ''
  }

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
     this.patient.studyid = data.data.hospitalAlias;
      this.surgeonService.surgeon_CountValue(this.getinfosurgeon.surgeonId).subscribe(data => {
      //   var num = 10000000;
      //   num = num + (data.message.length + 1);
      // //  var num1 = num.toString(num);
      // //  var num2 = num1.substr(2,8);
      //   this.patient.studyid = this.alias+''+num;
      });
    });

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

    });

  }

  ngOnInit() {
    this.  Surgeon_GetHospitalInfo();
    this.patient.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.patient.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.patient.branchId = JSON.parse(localStorage.getItem('branchId'));
    this.applyblue = true;
  }

}