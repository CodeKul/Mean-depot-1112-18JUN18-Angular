import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IpTypeComponent } from './databinding/ip-type.component';
import { CreaterComponent } from './databinding/creater.component';
import { ReceiverComponent } from './databinding/receiver.component';



@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    IpTypeComponent,
    CreaterComponent,
    ReceiverComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
