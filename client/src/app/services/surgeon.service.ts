import { Injectable } from '@angular/core';
import { HospitalService } from './hospital.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SurgeonService {
  options;
  domain = this.hospitalService.domain;
  constructor(
    private hospitalService: HospitalService,
    private http: Http
  ) { }

  createAuthenticationHeaders() {
    this.hospitalService.loadToken(); // Get token so it can be attached to headers
    console.log(this.hospitalService.authToken);
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.hospitalService.authToken // Attach token
      })
    });
  }
  surgeon_GetHospitalInfo(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_GetHospitalInfo/', id, this.options).map(res => res.json());

  }

  surgeon_AddPatient(patient) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatient/', patient, this.options).map(res => res.json());

  }
  surgeon_CountValue(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'surgeon/surgeon_CountValue/' + id, this.options).map(res => res.json());
  }
  surgeon_GetLastPatientId() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'surgeon/surgeon_GetLastPatientId', this.options).map(res => res.json());
  }

   surgeon_AddPatientPreoperative(patient) {
     console.log(patient);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientPreoperative/', patient, this.options).map(res => res.json());

  }
    surgeon_AddPatientRadiology(patient) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientRadiology/', patient, this.options).map(res => res.json());

  }
   surgeon_AddPatientIntraoperative(patient) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientIntraoperative/', patient, this.options).map(res => res.json());

  }
   surgeon_AddPatientPostoperative(patient) {
     console.log(patient);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientPostoperative/', patient, this.options).map(res => res.json());

  }
  
}
