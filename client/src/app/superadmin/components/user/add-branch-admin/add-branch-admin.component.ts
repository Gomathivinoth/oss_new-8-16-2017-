import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { HospitalService } from '../../../../services/hospital.service';

@Component({
  selector: 'app-add-branch-admin',
  templateUrl: './add-branch-admin.component.html',
  styleUrls: ['./add-branch-admin.component.css']
})
export class AddBranchAdminComponent implements OnInit {

  currentUrl;
  selectHospital;
  hospitalName;
  hospitalId;
  hospitalLists;
  showAddBranchAdmin = false;
  showAddBranchAdmin1 = false;
  branchAdminList;
  selectBranch = false;
  branchLists;
  showTable;
  hos_name = true;
  branch_name = true;
  name = true;
  email = true;
  phone_no = true;
  tech_no = true;
  username = true;
  password = true;

  hospital={
    hospitalAlias:'',
    branchName:'',
    branchType:'',
    branchAddress:''
  }

  branchAdmin = {
    branchId:'',
    hospitalId:'',
    name: '',
    email: '',
    phoneno: '',
    technicalno: '',
    username: '',
    password: ''
  }

   editAdmin = {
    editbranchid:'',
    edituserid:'',
    edithospitalId:'',
    editname:'',
    editemail:'',
    edittechno:'',
    editphoneno:'',
    editusername:'',
    editpassword:''
  }

  constructor(
    private hospitalService:HospitalService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  showAddHospitalName(id){
    this.selectBranch = true;
    this.hospitalService.getBranches(id).subscribe(data => {
      this.branchLists = data.message;
      this.hospitalId = id;
    });
  }
 showAddBranchName(id){
  // console.log(id);
  this. showAddBranchAdmin = true;
   this.hospitalService.getBranchUserDetails(id).subscribe(data => {
    this.branchAdminList = data.message;
    //console.log(data.message);
    if(this.branchAdminList.length < 1){
        this.showTable = false;
      } else {
        this.showTable = true;
      }
      
    });
    this.hospitalService.getHospitalBranchDetails(id).subscribe(data => {
     this.hospital.hospitalAlias = data.data.hospitalAlias;
     this.hospital.branchName = data.message.branchName;
     this.hospital.branchType = data.message.branchType;
     this.hospital.branchAddress =data.message.branchAddress;
    });
 }
  addBranchAdmin(branchAdmin){
    this.hospitalService.addBranchAdmin(branchAdmin).subscribe(data => {
    console.log(data.data);
    this.branchAdmin.name = '';
    this.branchAdmin.email = '';
    this.branchAdmin.phoneno = '';
    this.branchAdmin.technicalno = '';
    this.branchAdmin.username = '';
    this.branchAdmin.password = '';
    this.hos_name = false;
    this.branch_name = false;
      this.name = false;
      this.email = false;
      this.phone_no = false;
      this.tech_no = false;
      this.username = false;
      this.password = false;
    const [hospital_id, branch_id] = branchAdmin.branchId.split('-');
    const id = branchAdmin.hospitalId + "-"+ branch_id;
    //console.log(id);
    this.showAddBranchName(id);
      
    });
  }

  deleteBranchAdmin(id){
    this.hospitalService.deleteHospitalAdmin(id).subscribe(data =>{
      const id = data.data + "-" + data.data1;
        this.showAddBranchName(id);
    });
  }

  editBranchAdmin(id){
   //console.log(id);
    this.selectHospital = false;
    this.showAddBranchAdmin1 = true;
    this.hospitalService.getSingleUser(id).subscribe(data => {
     console.log(data.message);
      this.editAdmin.edithospitalId = data.message.hospitalId;
      this.editAdmin.editname = data.message.name;
      this.editAdmin.editemail = data.message.email;
      this.editAdmin.editphoneno = data.message.phoneno;
      this.editAdmin.edittechno = data.message.technicalno;
      this.editAdmin.editusername = data.message.username;
      this.editAdmin.editpassword = data.message.password;
      this.editAdmin.edituserid = data.message._id;
       this.editAdmin.editbranchid = data.message.branchId;
      console.log(this.editAdmin);
    });
  }

  updateBranchAdmin(editAdmin){
    this.hospitalService.updateHospitalAdmin(editAdmin).subscribe(data => {
        this.showAddBranchAdmin1 = false; 
        this.selectHospital = true;
        const id = editAdmin.edithospitalId + "-"+editAdmin.editbranchid;
        console.log(id);
       this.showAddBranchName(id);
        
    });
  }  

 toggleStatus(user){
    console.log(user);
    this.hospitalService.toggleUserStatus(user).subscribe(data => {
      const id = user.hospitalId + "-"+user.branchId;
        console.log(id);
       this.showAddBranchName(id);
    });
  }

  goBack(){
    this.showAddBranchAdmin1 = false; 
    this.selectHospital = true;
  }
  ngOnInit() {
    
      this.selectHospital = true;
      this.hospitalService.getHospitals().subscribe(data => {
        this.hospitalLists = data.message;
      });
    
  }

}
