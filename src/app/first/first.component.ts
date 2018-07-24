import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 usNm:string;
  constructor( private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.usNm=this.activatedRoute.snapshot.params['usNm'];
  }

  login(usNm:string,pass:string){
     this.router.navigate(['second',usNm]);
  }
}
