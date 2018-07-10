import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: `
  <div class="container">
     <div class="row">
         <div class="col-md-12">
         <input type="text" #mySal [value]="nm">
         <input type="button" (click)="upperCase(mySal.value)" value="go">
         Double value = {{this.pfDouble}}
         </div>
      </div>
    </div>  

  `,
  styles: []
})
export class ViewChildComponent implements OnInit {
//  nm :string;
nm :number;
pfDouble : number;
 pf = bs => (bs*12)/100;

 @ViewChild('mySal') mySal :ElementRef;
  constructor() { }

  ngOnInit() {
  }

  upperCase(nm : string){
    // this.nm = nm.toUpperCase();
    this.nm = this.pf(parseInt(nm));
    this.pfDouble = this.pf(parseInt(this.mySal.nativeElement.value)*2);


  }


}
