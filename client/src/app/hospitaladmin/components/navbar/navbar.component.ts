import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalAdminService } from '../../../services/hospital-admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
    private hospitalAdminService:HospitalAdminService
  ) { }

  logout(){
    this.hospitalAdminService.logout();
    this.router.navigateByUrl('http://localhost:4200');
  }


  ngOnInit() {
  }

}
