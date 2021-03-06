import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {HospitalService } from '../services/hospital.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;

  user = {
    username:'',
    password:''
  }
  success;

  constructor(
    private router:Router,
    private hospitalService:HospitalService
  ) { }

  loadUserModule(user){
    this.hospitalService.login(user).subscribe(data => {
      console.log(data);
      if(!data.success){
        this.message = data.message;
      }
      else {  
        this.hospitalService.storeUserData(data.token , data.user , data.message.hospitalId, data.message.branchId, data.message._id); 
       //console.log(data.message.usertype);//Stores user data in local storage
        if(data.message.usertype === 'superadmin'){
          this.router.navigate(['superadmin/dashboard']);
        } else if(data.message.usertype === 'hospitaladmin'){
          this.router.navigate(['hospitaladmin/dashboard']);
        }  else if(data.message.usertype === 'branchadmin'){
          this.router.navigate(['branchadmin/dashboard']);
        } else if(data.message.usertype === 'surgeon'){
          this.router.navigate(['surgeon/dashboard']);
        }
      }
    });
  }

  ngOnInit() {
  }


}
