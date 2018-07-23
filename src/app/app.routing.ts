import { Component } from '@angular/core';
import { FirstComponent } from "./first/first.component";
import { RouterModule } from '@angular/router';
import { SecondComponent } from "./second/second.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { SecondoneComponent } from './second/secondone.component';
import { SecondtwoComponent } from './second/secondtwo.component';


const SECOND_ROUTES = [

{path: 'one',component:SecondoneComponent},
{path:'two',component:SecondtwoComponent}
];

const APP_ROUTES =[

{path:'', component:FirstComponent},
{path:'second/:usNm' , component:SecondComponent,children:SECOND_ROUTES},
{path:'forgot' , component:ForgotComponent}

];

export  const MyRouterModule = RouterModule.forRoot(APP_ROUTES);
