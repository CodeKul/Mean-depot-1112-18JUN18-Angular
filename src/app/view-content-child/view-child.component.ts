import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
  <div class="container">
     <div class="row">
         <div class="col-md-12">
         <input type="text" #myName [value]="nm">
         <input type="button" (click)="upperCase(myName.value)" value="go">
         </div>
      </div>
    </div>  

  `,
  styles: []
})
export class ViewChildComponent implements OnInit {
 nm :string;
  constructor() { }

  ngOnInit() {
  }

  upperCase(nm : string){
    this.nm = nm.toUpperCase();
  }

}
