import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Control } from './databinding.component';

@Component({
  selector: 'app-creater',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-md-12">
   <div>
   <input type = "textBox" value="textBox" class="btn btn-primary" (click)="form(1)" >
   </div>
   <div>
   <input type = "button" value="button" class="btn btn-primary"  (click)="form(2)">
   </div>
    </div>
    </div>
    </div>
  `,
  styles: []
})
export class CreaterComponent implements OnInit {
  @Output() formEv : EventEmitter<Control>
  constructor() { 
    this.formEv = new EventEmitter<Control>();
  }

  ngOnInit() {
  }

  form(which :number){
     if(which === 1 ){
       this.formEv.emit({control :'text', value:'Radha'})
     }
     else{
       let ctl : Control = new Control()
       ctl.control = 'button';
       ctl.value = 'Krishna';
      this.formEv.emit(ctl);
     }

  }

}
