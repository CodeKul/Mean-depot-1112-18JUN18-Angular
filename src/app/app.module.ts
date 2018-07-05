import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { IpTypeComponent } from './databinding/ip-type.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    IpTypeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
