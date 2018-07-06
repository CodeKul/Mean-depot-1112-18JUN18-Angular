import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
componentName : string;
ipType : string;
border : string;
dyWidth: string;
control : Control;
  constructor() { 
    this.componentName = 'Angular';
    this.ipType = 'button';
   this.border = "2px solid red";
  // this.dyWidth = "200px";
  }

onePlus(){
  return 1+1;
}
  ngOnInit() {
  }
  changeBorder(){
    this.border = "4px solid green";
  }
}
export class Control {
  control : string;
  value : string;
}