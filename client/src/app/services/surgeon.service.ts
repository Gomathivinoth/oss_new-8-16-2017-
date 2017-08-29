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

}
