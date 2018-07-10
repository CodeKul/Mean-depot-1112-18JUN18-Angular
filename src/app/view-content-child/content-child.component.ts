import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-content-child',
  template: `
<div class="container">
  <div class="row">
    <div class="col-md-12">
    <div>
    <ng-content></ng-content>
    </div>
    <div>
    <input type ="button"  value="go" (click)="makeItUpper()">
    </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class ContentChildComponent implements OnInit {
 @ContentChild('fees') fees:ElementRef;

  constructor() { }

  ngOnInit() {
  }
  makeItUpper(){
    this.fees.nativeElement.value =  this.fees.nativeElement.value.toUpperCase();
  }
}
