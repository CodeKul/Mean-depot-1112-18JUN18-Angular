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






@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    IpTypeComponent,
    CreaterComponent,
    ReceiverComponent,
    ViewContentChildComponent,
    ViewChildComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
