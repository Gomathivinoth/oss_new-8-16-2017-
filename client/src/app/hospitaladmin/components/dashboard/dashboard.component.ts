import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HospitalAdminService } from '../../../services/hospital-admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private hospitalAdminService:HospitalAdminService,
    private http :Http
  ) { }

  hospitalId;
  noOfBranches;

  product = {
    photo:''
  }

  filesToUpload: Array<File> = [];

  getHospitalInfo(){
    this.hospitalId = localStorage.getItem('hospitalId');
    this.hospitalId = JSON.parse(this.hospitalId);
    this.hospitalAdminService.getHospitalInfo(this.hospitalId).subscribe(data => {
      if(!data.success){
        alert('Something went wrong!');
      } else {
        this.noOfBranches = data.message.noOfBranches;
      }
    });

  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files))
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.product.photo = fileInput.target.files[0]['name'];
  }


  ngOnInit() {
    this.getHospitalInfo();
  }

}
