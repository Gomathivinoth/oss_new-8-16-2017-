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

  uploadImage(formData) {
    return this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
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
    //  console.log(patient);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientPreoperative/', patient, this.options).map(res => res.json());

  }

  surgeon_AddkneeRevisionPreoperative(patient) {
    //  console.log(patient);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddkneeRevisionPreoperative/', patient, this.options).map(res => res.json());

  }

  surgeon_AddHipPrimaryPreoperative(patient) {
    //  console.log(patient);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddHipPrimaryPreoperative/', patient, this.options).map(res => res.json());

  }

  deleteImage(image) {
    console.log(image);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/deleteImage/', image, this.options).map(res => res.json());

  }
  surgeon_Patientkneescoure(score) {
    //  console.log(score);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_Patientkneescoure/', score, this.options).map(res => res.json());
  }

  surgeon_PatientPostkneescoure(score) {
    //  console.log(score);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_PatientPostkneescoure/', score, this.options).map(res => res.json());
  }

  surgeon_Patientwomacscoure(score) {
    //  console.log(score);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_Patientwomacscoure/', score, this.options).map(res => res.json());
  }

  surgeon_Patientsf36scoure(score) {
    //  console.log(score);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_Patientsf36scoure/', score, this.options).map(res => res.json());
  }


  surgeon_Patientkujalascoure(score) {
    //  console.log(score);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_Patientkujalascoure/', score, this.options).map(res => res.json());
  }

  surgeon_Patientoxfordscoure(score) {
    //  console.log(score);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_Patientoxfordscoure/', score, this.options).map(res => res.json());
  }

  surgeon_Patientharrishipscoure(score) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_Patientharrishipscoure/', score, this.options).map(res => res.json());
  }

  surgeon_PatientStatificationscoure(score) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_PatientStatificationscoure/', score, this.options).map(res => res.json());
  }

  surgeon_AddPatientRadiology(patient) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientRadiology/', patient, this.options).map(res => res.json());

  }
  surgeon_AddPatientRevisionRadiology(patient) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientRevisionRadiology/', patient, this.options).map(res => res.json());

  }

  surgeon_AddHipPrimaryRadiology(patient) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddHipPrimaryRadiology/', patient, this.options).map(res => res.json());

  }

  surgeon_AddPatientIntraoperative(patient) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientIntraoperative/', patient, this.options).map(res => res.json());

  }

    surgeon_AddPatientRevisionIntraoperative(patient) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientRevisionIntraoperative/', patient, this.options).map(res => res.json());

  }

  surgeon_AddHipPrimaryIntraoperative(patient) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddHipPrimaryIntraoperative/', patient, this.options).map(res => res.json());

  }
  surgeon_AddPatientPostoperative(patient) {
    console.log(patient);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientPostoperative/', patient, this.options).map(res => res.json());

  }
  surgeon_AddPatientRevisionPostoperative(patient) {
    console.log(patient);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientRevisionPostoperative/', patient, this.options).map(res => res.json());

  }
surgeon_AddPatientRevisionPostoperativescore(patient) {
    console.log(patient);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddPatientRevisionPostoperativescore/', patient, this.options).map(res => res.json());

  }
  
   surgeon_AddHipPrimaryPostoperative(patient) {
    console.log(patient);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'surgeon/surgeon_AddHipPrimaryPostoperative/', patient, this.options).map(res => res.json());

  }

  surgeon_SinglePatientId(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'surgeon/surgeon_SinglePatientId/' + id, this.options).map(res => res.json());
  }



}
