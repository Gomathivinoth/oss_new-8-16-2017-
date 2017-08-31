import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurgeonService } from '../../../services/surgeon.service';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class DemographicComponent implements OnInit {

  constructor(
    private surgeonService: SurgeonService,
    private router: Router
  ) { }

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
    city: '',
    state: '',
    country: '',
    zipcode: '',
    telephone: '',
    phoneno: '',
    email: '',
    type:''
  }
  addPatient(patient) {
    console.log(patient);
    // this.surgeonService.surgeon_AddPatient(patient).subscribe(data => {
    //   console.log(data);
    //   this.patient.firstname = '';
    //   this.patient.middlename = '';
    //   this.patient.lastname = '';
    //   this.patient.dob = '';
    //   this.patient.age = '';
    //   this.patient.gender = '';
    //   this.patient.height = '';
    //   this.patient.weight = '';
    //   this.patient.bmi = '';
    //   this.patient.uhid = '';
    //   this.patient.studyid = '';
    //   this.patient.city = '';
    //   this.patient.state = '';
    //   this.patient.country = '';
    //   this.patient.zipcode = '';
    //   this.patient.telephone = '';
    //   this.patient.phoneno = '';
    //   this.patient.email = '';
    //   this.firstname = false;
    //   this.middlename = false;
    //   this.lastname = false;
    //   this.dob = false;
    //   this.age = false;
    //   this.gender = false;
    //   this.height = false;
    //   this.weight = false;
    //   this.bmi = false;
    //   this.uhid = false;
    //   this.studyid = false;
    //   this.city = false;
    //   this.state = false;
    //   this.country = false;
    //   this.zipcode = false;
    //   this.telephone = false;
    //   this.phoneno = false;
    //   this.email = false;

    // });

  }

  ngOnInit() {
    this.patient.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.patient.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.patient.branchId = JSON.parse(localStorage.getItem('branchId'));
  }

}
