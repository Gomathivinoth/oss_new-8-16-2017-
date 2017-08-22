import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalAdminService } from '../../../../services/hospital-admin.service';

@Component({
  selector: 'add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(
    private hospitalAdminService: HospitalAdminService,
    private router: Router
  ) { }
  hospitalId;
  hospitalname;
  branch_type = true;
  branch_name = true;
  branch_address = true;
  branch_phone = true;
  branch_email = true;
  branch_website = true;
  branch_surgeon = true;
  branch_support = true;
  showForm = true;
  showTable;
  branchLists;

  branch = {
    hospitalId: '',
    branchAlias: '',
    branchType: '',
    branchName: '',
    branchAddress: '',
    branchPhoneno: '',
    branchEmail: '',
    branchWebsite: '',
    noOfSurgeons: '',
    noOfSupportStaffs: '',
    service: [{
      'serviceName': String,
      'selected': Boolean,
    }]
  }

  service: any = [
    { 'serviceName': 'Knee', 'selected': false },
    { 'serviceName': 'Hip', 'selected': false },
    { 'serviceName': 'ACL', 'selected': false },
    { 'serviceName': 'PCL', 'selected': false },
    { 'serviceName': 'Spine', 'selected': false },
    { 'serviceName': 'All', 'selected': false }
  ];


  getHospitalInfo() {
    this.hospitalId = localStorage.getItem('hospitalId');
    console.log(this.hospitalId);
    this.hospitalId = JSON.parse(this.hospitalId);
    this.hospitalAdminService.getHospitalInfo(this.hospitalId).subscribe(data => {
      if (!data.success) {
        alert('Something went wrong!');
      } else {
        this.branchLists = data.message.branchDetails;
        this.hospitalname = data.message.hospitalName;
        this.branch.branchAlias = data.message.hospitalAlias;
        this.branch.hospitalId = data.message._id;
        if(this.branchLists.length < 1){
          this.showTable = false;
        } else {
          this.showTable = true;
        }
      }
    });
  }


  addBranch(branch){
    console.log(branch);
    this.hospitalAdminService.hospital_AddBranch(branch).subscribe(data =>{
      console.log(data);
    });
  }

  createRange() {
    const items: number[] = [];
    for (var i = 1; i <= 20; i++) {
      items.push(i);
    }
    return items;
  }

  ngOnInit() {
    this.getHospitalInfo();
    this.createRange();
    this.branch.service = this.service;
  }

}
