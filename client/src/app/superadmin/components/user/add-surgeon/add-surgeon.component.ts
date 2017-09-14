import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'app-add-surgeon',
  templateUrl: './add-surgeon.component.html',
  styleUrls: ['./add-surgeon.component.css']
})
export class AddSurgeonComponent implements OnInit {

  currentUrl;
  showForm;
  hospitalName;
  hospitalId;
  hospitalLists;
  showAddSurgeon = false;
  showAddSurgeon1 = false;
  surgeonList;
  selectBranch = false;
  branchLists;
  showTable;
  branch_name = true;
  hos_name = true;
  reg_no = true;
  country = true;
  city = true;
  email = true;
  phone_no = true;
  username = true;
  password = true;
  name = true;

  surgeon = {
    branchId: '',
    hospitalId: '',
    name: '',
    regno: '',
    city: '',
    country: '',
    email: '',
    phoneno: '',
    username: '',
    password: '',
    filename: '',
    filetype: ''
  }

  editAdmin = {
    editbranchid: '',
    edituserid: '',
    edithospitalId: '',
    editname: '',
    editregno: '',
    editemail: '',
    editcity: '',
    editcountry: '',
    editphoneno: '',
    editusername: '',
    editpassword: '',
    filename: '',
    editfilename: '',
    editfiletype: ''
  }

  hospital = {
    hospitalAlias: ''
  }
  filesToUpload: Array<File> = [];
  constructor(
    private hospitalService: HospitalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: Http
  ) { }

  showAddHospitalName(id) {
    this.selectBranch = true;
    this.hospitalService.getBranches(id).subscribe(data => {
      this.branchLists = data.message;
      this.hospitalId = id;
    });
  }
  showAddBranchName(id) {
    const [hospital_id, branch_id] = id.split('-');
    this.showAddSurgeon = true;
    this.hospitalService.getBranchUserDetails(id).subscribe(data => {
      //console.log(data.message);
      this.surgeonList = data.message;
      //console.log(data.message);
      if (this.surgeonList.length < 1) {
        this.showTable = false;
      } else {
        this.showTable = true;
      }

    });
    this.hospitalService.getHospitalDetails(hospital_id).subscribe(data => {
      this.hospital.hospitalAlias = data.message1.hospitalAlias;
    });
  }

  addSurgeon(surgeon) {
     console.log(surgeon);
    this.hospitalService.addSurgeon(surgeon).subscribe(data => {
      //  console.log(data.message);
      this.surgeon.name = '';
      this.surgeon.regno = '';
      this.surgeon.email = '';
      this.surgeon.city = '';
      this.surgeon.country = '';
      this.surgeon.phoneno = '';
      this.surgeon.username = '';
      this.surgeon.password = '';
      this.branch_name = false;
      this.hos_name = false;
      this.name = false;
      this.reg_no = false;
      this.country = false;
      this.city = false;
      this.email = false;
      this.phone_no = false;
      this.username = false;
      this.password = false;
      const [hospital_id, branch_id] = surgeon.branchId.split('-');
      const id = surgeon.hospitalId + "-" + branch_id;
      //console.log(id);
      this.showAddBranchName(id);
    });
  }

  fileChangeEvent(fileInput: any) {
     let age = new Date();
    this.surgeon.filename = "sugeon_" + Number(age) + fileInput.target.files[0]['name'];
    this.surgeon.filetype  = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    formData.append("Name", "sugeon_");
    formData.append("Age", Number(age));
    formData.append("uploads[]", files[0], files[0]['name']);

    this.hospitalService.uploadImage(formData).subscribe(data => {
    });
  }


  deleteSurgeon(id) {
    this.hospitalService.deleteHospitalAdmin(id).subscribe(data => {
      const id = data.data + "-" + data.data1;
      this.showAddBranchName(id);
    });
  }

  editSurgeon(id) {
    //console.log(id);
    this.showForm = false;
    this.hospitalService.getSingleUser(id).subscribe(data => {
      // console.log(data.message);
      this.editAdmin.edithospitalId = data.message.hospitalId;
      this.editAdmin.editname = data.message.name;
      this.editAdmin.editregno = data.message.regno;
      this.editAdmin.editcity = data.message.city;
      this.editAdmin.editcountry = data.message.country;
      this.editAdmin.editemail = data.message.email;
      this.editAdmin.editphoneno = data.message.phoneno;
      this.editAdmin.editusername = data.message.username;
      this.editAdmin.editpassword = data.message.password;
      this.editAdmin.filename = data.message.fileName;
      this.editAdmin.edituserid = data.message._id;
      this.editAdmin.editbranchid = data.message.branchId;
      //console.log(this.editAdmin);
    });
  }
  updatesurgeon(editAdmin) {
   
    this.hospitalService.updateHospitalAdmin(editAdmin).subscribe(data => {
      this.showForm = true;
      const id = editAdmin.edithospitalId + "-" + editAdmin.editbranchid;
      // console.log(id);
      this.showAddBranchName(id);

    });
  }
  editFileChangeEvent(fileInput: any) {
      let age = new Date();
    this.editAdmin.editfilename = "sugeon_" + Number(age) + fileInput.target.files[0]['name'];
    this.editAdmin.editfiletype  = fileInput.target.files[0]['type'];
    const formData: any = new FormData();
    const files: Array<File> = <Array<File>>fileInput.target.files;
    formData.append("Name", "sugeon_");
    formData.append("Age", Number(age));
    formData.append("uploads[]", files[0], files[0]['name']);

    this.hospitalService.uploadImage(formData).subscribe(data => {
    });

  }
  goBack() {
    this.showForm = true;
  }
  toggleStatus(user) {
    // console.log(user);
    this.hospitalService.toggleUserStatus(user).subscribe(data => {
      const id = user.hospitalId + "-" + user.branchId;
      // console.log(id);
      this.showAddBranchName(id);
    });
  }
  ngOnInit() {

    this.showForm = true;
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitalLists = data.message;
    });

  }

}
