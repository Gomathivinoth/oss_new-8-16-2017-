import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-hip-primary',
  templateUrl: './hip-primary.component.html',
  styleUrls: ['./hip-primary.component.css']
})
export class HipPrimaryComponent implements OnInit {
  @Input() active: boolean = false;
  constructor(
    private surgeonService: SurgeonService,
    private router: Router
  ) { }

  disable = true;
  applydemographic;
  applyblue;
  bilateral = false;
  combinationvalue = false;
  demographic() {
    this.applydemographic = true;
    alert('hai');
  }

  patient = {
    patientId: '',
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
    type: 'Hip_primary',
    surgeonname: ''
  }

  heightvalues = '';
  weightvalues = '';
  alias = '';
  getinfosurgeon = {
    hospitalId: '',
    branchId: '',
    surgeonId: ''
  }
  // bmi calucation start
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


  datecheckvalue(event: any) {
    var today = new Date();
    var birthDate = new Date(event.target.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.patient.age = JSON.stringify(age);
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

  Surgeon_GetHospitalInfo() {
    this.getinfosurgeon.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.getinfosurgeon.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.getinfosurgeon.branchId = JSON.parse(localStorage.getItem('branchId'));
    this.surgeonService.surgeon_GetHospitalInfo(this.getinfosurgeon).subscribe(data => {
      this.alias = data.data.hospitalAlias;
      this.patient.surgeonname = data.data1.name;
     // console.log(this.getinfosurgeon.surgeonId);
      this.surgeonService.surgeon_CountValue(this.getinfosurgeon.surgeonId).subscribe(data => {
        //console.log(data.message);
        var num = 10000000;
        var num1 = JSON.stringify(num + (data.message.length + 1));
        var num2 = num1.substr(2, 8);
        this.patient.studyid = this.alias + '' + num2;
      });
    });

  }

  addPatient(patient) {
    //console.log(patient);
    this.surgeonService.surgeon_AddPatient(patient).subscribe(data => {
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        var id = dataPatientId.message[0]._id;
        this.router.navigate(['surgeon/Hip/hip-primary-preoperative/', id]);
        //this.router.navigate(['surgeon/Hip/hip-primary-preoperative']);
      });

    });
  }

  ngOnInit() {
    this.applydemographic = true;
    this.Surgeon_GetHospitalInfo();
    this.patient.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.patient.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.patient.branchId = JSON.parse(localStorage.getItem('branchId'));
  }

}
