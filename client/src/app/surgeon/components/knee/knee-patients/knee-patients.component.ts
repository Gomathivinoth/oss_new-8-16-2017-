import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knee-patients',
  templateUrl: './knee-patients.component.html',
  styleUrls: ['./knee-patients.component.css']
})
export class KneePatientsComponent implements OnInit {

  constructor(
  ) { }

  todaydate;
  surgeonName;
  hospitalName;
  address;
  getinfosurgeon = {
    hospitalId: '',
    branchId: '',
    surgeonId: ''
  } 
  ngOnInit() {
  }

}
