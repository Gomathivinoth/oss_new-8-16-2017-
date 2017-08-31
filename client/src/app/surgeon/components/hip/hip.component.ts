import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hip',
  templateUrl: './hip.component.html',
  styleUrls: ['./hip.component.css']
})
export class HipComponent implements OnInit {

  constructor() { }
   tab = 0;

  setTab(num: number) {
    this.tab = num;
  }
  
  isSelected(num: number) {
    return this.tab === num;
  }

  ngOnInit() {
  }

}
