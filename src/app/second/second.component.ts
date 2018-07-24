import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit,OnDestroy {
  usNm:string;
    sub: Subscription;
   subQury:Subscription;
  constructor( private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    
    // this.usNm=this.activatedRoute.snapshot.params['usNm'];
    this.sub=this.activatedRoute.params.subscribe(prms => this.usNm = prms['usNm']);
    // this.subQury= this.router.routerState.root.queryParams.subscribe(qprms=> this.usNm+=' '+qprms['ver']);
  }

  changeUsNm(usNm:string){
    // this.usNm= usNm;
    this.router.navigate(['second',usNm],
    {queryParams:
    {ver:new Date().getMilliseconds()}
  });
 
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

