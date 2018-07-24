import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {

  constructor() { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
  //  return false;
     return route.params['usNm']==='pooja';
  }

}
