import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class HospitalService {

  domain = "http://localhost:3000/"; // Development Domain - Not Needed in Production
  authToken;
  user;
  options;

  constructor(
    private http:Http
  ) { }

   createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    });
  }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
  }

  login(user){
    return this.http.post(this.domain+'authentication/login',user).map(res => res.json());
  }

  // Function to logout
  logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }

  storeUserData(token, user , hospitalId, branchId, surgeonId) {
   // console.log(hospitalId);
   // console.log(branchId);
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    localStorage.setItem('hospitalId',JSON.stringify(hospitalId));
    localStorage.setItem('branchId',JSON.stringify(branchId));
    localStorage.setItem('surgeonId',JSON.stringify(surgeonId));
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }

  // Function to check if user is logged in
  loggedIn() {
    return tokenNotExpired();
  }

  addHospital(hospital){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'authentication/addHospital', hospital, this.options).map(res => res.json());
  }
  
  getHospitals(){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'authentication/getHospitals',this.options).map(res => res.json());
  }

  // getSurgeonName(){
  //   this.createAuthenticationHeaders(); // Create headers
  //   return this.http.get(this.domain + 'authentication/getSurgeonName',this.options).map(res => res.json());
  // }
  
  getSingleHospital(id){
      this.createAuthenticationHeaders(); // Create headers
      return this.http.get(this.domain + 'authentication/getSingleHospital/'+id , this.options).map(res => res.json());
  }

  updateHospital(hospital){
      this.createAuthenticationHeaders(); // Create headers
      return this.http.put(this.domain + 'authentication/updateHospital/' , hospital , this.options).map(res => res.json());
  }

  deleteHospital(id){
      //console.log(id);
      this.createAuthenticationHeaders(); // Create headers
      return this.http.delete(this.domain + 'authentication/deleteHospital/'+id , this.options).map(res => res.json());
  }

  addBranch(branch){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'authentication/addBranch/', branch , this.options).map(res => res.json());
  }

  getBranches(id){
    console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'authentication/getBranches/'+id , this.options).map(res => res.json());
  }

  getSingleBranch(id){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'authentication/getSingleBranch/', id , this.options).map(res => res.json());
  }

  updateBranch(branch){
    console.log(branch);
    this.createAuthenticationHeaders(); // Create headers
      return this.http.put(this.domain + 'authentication/updateBranch/' ,branch , this.options).map(res => res.json());
  }

  deleteBranch(id){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'authentication/deleteBranch/',id , this.options).map(res => res.json());
  }

   getUserDetails(id){
    //console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'authentication/getUserDetails/'+id , this.options).map(res => res.json());
  }

  addHospitalAdmin(hospitalAdmin){
   // console.log(hospitalAdmin);
  this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'authentication/addHospitalAdmin', hospitalAdmin, this.options).map(res => res.json());
  }

  deleteHospitalAdmin(id){
      //console.log(id);
      this.createAuthenticationHeaders(); // Create headers
      return this.http.delete(this.domain + 'authentication/deleteHospitalAdmin/'+id , this.options).map(res => res.json());
  }
  
   getSingleUser(id){
    //console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'authentication/getSingleUser/'+id , this.options).map(res => res.json());
  }

   updateHospitalAdmin(editAdmin){
     // console.log(id);
      this.createAuthenticationHeaders(); // Create headers
      return this.http.put(this.domain + 'authentication/updateHospitalAdmin/' , editAdmin , this.options).map(res => res.json());
  }

getBranchUserDetails(id){
    //console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'authentication/getBranchUserDetails/'+id , this.options).map(res => res.json());
  }

  addBranchAdmin(branchAdmin){
    //console.log(branchAdmin);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'authentication/addBranchAdmin', branchAdmin, this.options).map(res => res.json());
  }
  
  addSurgeon(surgeon){
   // console.log(surgeon);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'authentication/addSurgeon', surgeon, this.options).map(res => res.json());
  }

  getSurgeon(id){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'authentication/getSurgeon/'+id , this.options).map(res => res.json());
  }

  getBranchSurgeonDetails(id){
    //console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'authentication/getBranchSurgeonDetails/'+id , this.options).map(res => res.json());
  }

   addSupportStaff(supportStaff){
   // console.log(surgeon);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'authentication/addSupportStaff', supportStaff, this.options).map(res => res.json());
  }
  getHospitalDetails(id){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'authentication/getHospitalDetails/'+id , this.options).map(res => res.json());
  }
  getHospitalBranchDetails(id){
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'authentication/getHospitalBranchDetails/'+id , this.options).map(res => res.json());
  }
  
   toggleHospitalStatus(hospital){
    console.log(hospital);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'authentication/updateHospitalStatus/' , hospital , this.options).map(res => res.json());
  }

  toggleBranchStatus(branch){
    console.log(branch);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'authentication/toggleBranchStatus/' , branch , this.options).map(res => res.json());
  }


  toggleUserStatus(id){
    console.log(id);
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'authentication/toggleUserStatus/' , id , this.options).map(res => res.json());
  }
  

}
