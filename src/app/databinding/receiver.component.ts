import { Component, OnInit, Input } from '@angular/core';
import { Control } from './databinding.component';

@Component({
  selector: 'app-receiver',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-md-12">
   <div>
   <input [type] = "ipCntrl.control" [value]="ipCntrl.value"   >
   </div>
   </div>
   </div>
   </div>
  `,
  styles: []
})
export class ReceiverComponent implements OnInit {
   @Input() ipCntrl : Control;
  constructor() { }

  ngOnInit() {
  }

}
