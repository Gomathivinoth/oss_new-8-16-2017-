import { Injectable } from '@angular/core';
import { HospitalService } from './hospital.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BranchAdminService {
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

  getHospitalBranchInfo(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'branchAdmin/getHospitalBranchInfo/', id, this.options).map(res => res.json());
  }
  branchGetUserList(user) {
    // console.log(user);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'branchAdmin/branchGetUserList/', user, this.options).map(res => res.json());

  }
  branch_GetsurgeonName(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'branchAdmin/branch_GetsurgeonName/', id, this.options).map(res => res.json());
  }
  branch_GetSurpportList(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'branchAdmin/branch_GetSurpportList/', id, this.options).map(res => res.json());

  }
  branch_AddSupportStaff(supportStaff){
     this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'branchAdmin/branch_AddSupportStaff/', supportStaff, this.options).map(res => res.json());

  }
  branch_AddSurgeon(surgeon) {
    // console.log(surgeon);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'branchAdmin/branch_AddSurgeon/', surgeon, this.options).map(res => res.json());

  }
  branch_GetSingleUserDetail(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'branchAdmin/branch_GetSingleUserDetail/' + id, this.options).map(res => res.json());

  }
  branch_updateUserDetail(user) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'branchAdmin/branch_updateUserDetail/', user, this.options).map(res => res.json());
  }


  branch_DeleteUserDetails(id) {
    //  console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.delete(this.domain + 'branchAdmin/branch_DeleteUserDetails/' + id, this.options).map(res => res.json());

  }
  branch_ToggleUserStatus(id) {
    //console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'branchAdmin/branch_ToggleUserStatus/', id, this.options).map(res => res.json());
  }

}
