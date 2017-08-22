import { Component, OnInit } from '@angular/core';
import { HospitalAdminService } from '../../../services/hospital-admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private hospitalAdminService:HospitalAdminService
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

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.product.photo = fileInput.target.files[0]['name'];
    console.log(this.filesToUpload);
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    console.log(files);
    const pics = formData.append("uploads[]", files[0],files[0]['name']);
    console.log(pics);
    // this.hospitalAdminService.uploadImage(formData).subscribe(data => {
    //   console.log('files',data);
    // });

    // this.http.post('http://localhost:3001/upload', formData)
    //   .map(files => files.json())
    //   .subscribe(files => console.log('files', files))
  }


  ngOnInit() {
    this.getHospitalInfo();
  }

}
