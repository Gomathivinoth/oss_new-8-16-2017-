import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BranchAdminService } from '../../../services/branch-admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

constructor(
    private router:Router,
    private branchAdminService:BranchAdminService
  ) { }

  logout(){
    this.branchAdminService.logout();
    this.router.navigateByUrl('http://localhost:4200');
  }

  ngOnInit() {
  }

}
