import { Component } from '@angular/core';
import { FirstComponent } from "./first/first.component";
import { RouterModule, CanActivate } from '@angular/router';
import { SecondComponent } from "./second/second.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { SecondoneComponent } from './second/secondone.component';
import { SecondtwoComponent } from './second/secondtwo.component';
import { GuardService } from './guard.service';

const ONE_ROUTES = [
    {path: 'three',component:SecondoneComponent}, 
];
const SECOND_ROUTES = [

{path: 'one',component:SecondoneComponent,children:ONE_ROUTES},
{path:'two',component:SecondtwoComponent}
];

const APP_ROUTES =[

{path:'', component:FirstComponent},
{path:'second/:usNm' , component:SecondComponent,children:SECOND_ROUTES},
{path:'forgot/:usNm' , component:ForgotComponent,canActivate:[GuardService]}

];

export  const MyRouterModule = RouterModule.forRoot(APP_ROUTES);
