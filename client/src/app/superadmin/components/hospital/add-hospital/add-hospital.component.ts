import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {

  hospitalLists;
  hospitalToBeUpdated;
  surgonNames;
  refhospitalname;
  hos_name = true;
  hos_alias = true;
  hos_type = true;
  hos_address = true;
  hos_phoneno = true;
  hos_email = true;
  hos_website = true;
  hos_surgeon = true;
  hos_support = true;
  image = true;
  showForm = true;
  showTable = false;

  hospital = {
    hospitalName: '',
    hospitalAlias: '',
    hospitalType: '',
    hospitalAddress: '',
    hospitalPhoneno: '',
    hospitalEmail: '',
    hospitalWebsite: '',
    noOfSurgeons: '',
    noOfSupportStaffs: '',
    filename: '',
    filetype: '',
    service: [{
      'serviceName': String,
      'selected': Boolean,
    }]
  }



  newHospital = {
    newHospitalName: '',
    newHospitalAlias: '',
    newHospitalType: '',
    newHospitalAddress: '',
    newHospitalPhoneno: '',
    newHospitalEmail: '',
    newHospitalWebsite: '',
    newNoOfSurgeons: '',
    newNoOfSupportStaffs: '',
    newHospitalId: '',
    filename: '',
    newfilename: '',
    newfiletype: '',
    service: [{
      'serviceName': String,
      'selected': Boolean,
    }]
  }

  service: any = [
    { 'serviceName': 'Knee', 'selected': false },
    { 'serviceName': 'Hip', 'selected': true },
    { 'serviceName': 'ACL', 'selected': true },
    { 'serviceName': 'PCL', 'selected': false },
    { 'serviceName': 'Spine', 'selected': false },
    { 'serviceName': 'All', 'selected': false }
  ];


  filesToUpload: Array<File> = [];
  constructor(
    private hospitalService: HospitalService,
    private router: Router,
    private http: Http
  ) { }

  addHospital(hospital) {
    // console.log(hospital);
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append("uploads[]", files[0], files[0]['name']);

    this.http.post('http://localhost:3000/upload', formData).map(files => files.json())
      .subscribe(files => console.log('files', files))

    this.hospitalService.addHospital(hospital).subscribe(data => {
      this.getHospitals();
      this.hospital.hospitalName = '';
      this.hospital.hospitalAlias = '';
      this.hospital.hospitalType = '';
      this.hospital.hospitalAddress = '';
      this.hospital.hospitalPhoneno = '';
      this.hospital.hospitalEmail = '';
      this.hospital.hospitalWebsite = '';
      this.hospital.noOfSurgeons = '';
      this.hospital.noOfSupportStaffs = '';

      this.hos_name = false;
      this.hos_alias = false;
      this.hos_type = false;
      this.hos_address = false;
      this.hos_phoneno = false;
      this.hos_email = false;
      this.hos_website = false;
      this.hos_surgeon = false;
      this.hos_support = false;
      this.image = false;

    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.hospital.filename = dt + "-" + fileInput.target.files[0]['name'];
    this.hospital.filetype = fileInput.target.files[0]['type'];
  }


  getHospitals() {
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitalLists = data.message;
      if (this.hospitalLists.length < 1) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }
    });
  }

  editHospital(id) {
    this.showForm = false;
    this.hospitalService.getSingleHospital(id).subscribe(data => {
      //  console.log(data.message);
      this.newHospital.newHospitalName = data.message.hospitalName;
      this.newHospital.newHospitalAlias = data.message.hospitalAlias;
      this.newHospital.newHospitalType = data.message.hospitalType;
      this.newHospital.newHospitalAddress = data.message.hospitalAddress;
      this.newHospital.newHospitalPhoneno = data.message.hospitalPhoneno;
      this.newHospital.newHospitalEmail = data.message.hospitalEmail;
      this.newHospital.newHospitalWebsite = data.message.hospitalWebsite;
      this.newHospital.newNoOfSurgeons = data.message.noOfSurgeons;
      this.newHospital.newNoOfSupportStaffs = data.message.noOfSupportStaffs;
      this.newHospital.filename = data.message.fileName;
      this.newHospital.service = data.message.service;
      this.newHospital.newHospitalId = data.message._id;
      //console.log(this.newHospital);
    });
  }

  updateHospital(hospital) {
    //console.log(hospital);
    if (hospital.newfilename) {
      const formData: any = new FormData();
      const files: Array<File> = this.filesToUpload;
      //console.log(files);
      formData.append("uploads[]", files[0], files[0]['name']);

      this.http.post('http://localhost:3000/upload', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
    }

    this.hospitalService.updateHospital(hospital).subscribe(data => {
      this.showForm = true;
      this.getHospitals();
    });
  }

  editFileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    var dt = new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    this.newHospital.newfilename = dt + "-" + fileInput.target.files[0]['name'];
    this.newHospital.newfiletype = fileInput.target.files[0]['type'];

  }

  deleteHospital(id) {
    this.hospitalService.deleteHospital(id).subscribe(data => {
      this.getHospitals();
    });
  }

  goBack() {
    this.showForm = true;
  }

  manageBranch(id) {
    this.router.navigate(['superadmin/hospital/add-branch/', id]);
  }

  createRange() {
    const items: number[] = [];
    for (var i = 1; i <= 20; i++) {
      items.push(i);
    }
    return items;
  }

  toggleStatus(hospital) {
   // console.log(hospital);
    this.hospitalService.toggleHospitalStatus(hospital).subscribe(data => {
      this.getHospitals();
    });
  }
  ngOnInit() {
    this.getHospitals();
    this.createRange();
    this.hospital.service = this.service;

  }

}
