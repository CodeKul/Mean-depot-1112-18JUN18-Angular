import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-datadriven',
  templateUrl: './datadriven.component.html',
  styleUrls: ['./datadriven.component.css']
})
export class DatadrivenComponent implements OnInit {
    myForm:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

     this.myForm = this.fb.group({
       usNm:['',Validators.required],
       email:['',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
       pass:['',[Validators.required,this.length10]]
     })
  }

onSubmit(){
  console.log(this.myForm);
  
}
length10(control: AbstractControl) {
  return control.value.length >= 8   ? null : { myErr: 'Check the length' };
}
}
