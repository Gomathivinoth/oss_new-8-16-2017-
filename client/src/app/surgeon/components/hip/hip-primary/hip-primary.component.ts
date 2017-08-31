import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurgeonService } from '../../../../services/surgeon.service';

@Component({
  selector: 'app-hip-primary',
  templateUrl: './hip-primary.component.html',
  styleUrls: ['./hip-primary.component.css']
})
export class HipPrimaryComponent implements OnInit {
  @Input() active: boolean = false;
  constructor(
    private surgeonService: SurgeonService,
    private router: Router
  ) { }

  todaydate;
  surgeonName;
  hospitalName;
  address;
  getinfosurgeon = {
    hospitalId: '',
    branchId: '',
    surgeonId: ''
  }

  Surgeon_GetHospitalInfo() {
    this.getinfosurgeon.hospitalId = JSON.parse(localStorage.getItem('hospitalId'));
    this.getinfosurgeon.surgeonId = JSON.parse(localStorage.getItem('surgeonId'));
    this.getinfosurgeon.branchId = JSON.parse(localStorage.getItem('branchId'));
    this.surgeonService.surgeon_GetHospitalInfo(this.getinfosurgeon).subscribe(data => {
      console.log(data);
      this.surgeonName = data.data1.name;
      this.address = data.message.branchAddress;
      this.hospitalName = data.data.hospitalName;
    });

  }

  ngOnInit() {
    this.Surgeon_GetHospitalInfo();
    var today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    this.todaydate = today;
  }

}
