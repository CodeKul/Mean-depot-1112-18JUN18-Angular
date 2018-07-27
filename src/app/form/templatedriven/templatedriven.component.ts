import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
 user = {
  usNm:'',
  email:'',
  pass:''
 }
  constructor() { }

  ngOnInit() {
  }
 
  onSubmit(Form : NgForm){
  //  console.log(Form.form.value);
  console.log(Form);
  
  }

}
