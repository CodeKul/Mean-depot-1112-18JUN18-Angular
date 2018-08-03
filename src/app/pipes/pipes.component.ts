import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  systems : string[];

// sysNm:string;
  cost:number;
  dt:string;
  name:string;
  constructor() { 
   this.systems = [];
   this.systems.push('oneplus6');
   this.systems.push('samsung');
   this.systems.push('iPhone');
   this.systems.push('vovo');
   this.systems.push('honor');

    this.name = 'angular class';
     this.cost = 1500;
     this.dt = new Date().toISOString();
  }

  ngOnInit() {
  }

}
