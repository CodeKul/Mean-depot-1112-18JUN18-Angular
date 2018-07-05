import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ip-type',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-md-12">
      <h2>My Address={{address}}</h2>
      </div>
      </div>
      </div>
  `,
  styles: [ ]
})
export class IpTypeComponent implements OnInit {
  @Input('add')
  address: string;
  constructor() {
    
   }
  ngOnInit() {
  }

}
