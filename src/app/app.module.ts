import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IpTypeComponent } from './databinding/ip-type.component';
import { CreaterComponent } from './databinding/creater.component';
import { ReceiverComponent } from './databinding/receiver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewContentChildComponent } from './view-content-child/view-content-child.component';
import { ViewChildComponent } from './view-content-child/view-child.component';
import { ContentChildComponent } from './view-content-child/content-child.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MyRouterModule } from './app.routing';
import { ForgotComponent } from './forgot/forgot.component';
import { SecondoneComponent } from './second/secondone.component';
import { SecondtwoComponent } from './second/secondtwo.component';
// import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    IpTypeComponent,
    CreaterComponent,
    ReceiverComponent,
    ViewContentChildComponent,
    ViewChildComponent,
    ContentChildComponent,
    DirectivesComponent,
    LifecycleComponent,
    FirstComponent,
    SecondComponent,
    ForgotComponent,
    SecondoneComponent,
    SecondtwoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule ,
    MyRouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
