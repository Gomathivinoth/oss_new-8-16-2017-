import { Injectable } from '@angular/core';
import { HospitalService } from './hospital.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HospitalAdminService {

  options;
  domain = this.hospitalService.domain;
  constructor(
    private hospitalService: HospitalService,
    private http: Http
  ) {

  }

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

  getHospitalInfo(id) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'hospitalAdmin/getHospitalInfo/' + id, this.options).map(res => res.json());
  }

  hospital_AddBranch(branch) {
    //console.log(branch);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'hospitalAdmin/hospital_AddBranch/', branch, this.options).map(res => res.json());

  }

  hospital_EditBranch(id){
    console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'authentication/hospital_EditBranch/', id , this.options).map(res => res.json());
  }

  hospital_UpdateBranch(branch){
    console.log(branch);
      this.createAuthenticationHeaders(); // Create headers
      return this.http.put(this.domain + 'hospitalAdmin/hospital_UpdateBranch/' , branch , this.options).map(res => res.json());
  }

  hospital_DeleteBranch(id){
   //console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'hospitalAdmin/hospital_DeleteBranch/',id , this.options).map(res => res.json());
  }

    toggleHospitalStatus(id){
    console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'hospitalAdmin/toggleHospitalStatus/' , id , this.options).map(res => res.json());
  }

  getSurgeonInfo(id) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'hospitalAdmin/getSurgeonInfo/' + id, this.options).map(res => res.json());

  }
  hospital_AddSurgeon(surgeon){
    // console.log(surgeon);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'hospitalAdmin/hospital_AddSurgeon/', surgeon, this.options).map(res => res.json());

  }

  getSurgeonList(id) {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'hospitalAdmin/getSurgeonList/' + id, this.options).map(res => res.json());
  }

  getSupportStaffInfo(id){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'hospitalAdmin/getSupportStaffInfo/' + id, this.options).map(res => res.json());
 }

  hospital_AddSupportStaff(supportStaff){
     console.log(supportStaff);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'hospitalAdmin/hospital_AddSupportStaff/', supportStaff, this.options).map(res => res.json());

  }

  getSingleUserDetail(id){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'hospitalAdmin/getSingleUserDetail/'+id , this.options).map(res => res.json());
  
  }

  updateUserDetail(user){
      this.createAuthenticationHeaders(); // Create headers
      return this.http.put(this.domain + 'hospitalAdmin/updateUserDetail/' , user , this.options).map(res => res.json());
  }

  deleteUserDetails(id){
    console.log(id);
      this.createAuthenticationHeaders(); // Create headers
      return this.http.delete(this.domain + 'hospitalAdmin/deleteUserDetails/'+id , this.options).map(res => res.json());
  
  }

  toggleUserStatus(id){
    console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'hospitalAdmin/toggleUserStatus/' , id , this.options).map(res => res.json());
  }


}
