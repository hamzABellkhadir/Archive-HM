import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import {LoginPrincipModule} from "./login-princip/login-princip.module";
import {ArchivePrincipModule} from "./archive-princip/archive-princip.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,


    LoginPrincipModule,
    ArchivePrincipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
