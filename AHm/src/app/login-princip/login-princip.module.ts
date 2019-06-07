import {NgModule} from "@angular/core";
import {LoginPrincipComponent} from "./login-princip.component";
import {LoginPrincipRoutingModule} from "./login-princip-routing.module";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../material/material.module";
import { PremierePageComponent } from './premiere-page/premiere-page.component';
import { FormLoginComponent } from './form-login/form-login.component';
import {FormLoginserve} from "./ServiceLogin/fromLogin";
import {NotificationUService} from "./ServiceLogin/NotificationU";
import { NvInformationComponent } from './nv-information/nv-information.component';
import {ServiceAuthentification} from "./ServiceLogin/authentification.service";
import { ConsultationImpriComponent } from './nv-information/consultation-impri/consultation-impri.component';
import { VersementImpriComponent } from './nv-information/versement-impri/versement-impri.component';


@NgModule({
  imports: [
    LoginPrincipRoutingModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [
    LoginPrincipComponent,
    PremierePageComponent,
    FormLoginComponent,
    NvInformationComponent,
    ConsultationImpriComponent,
    VersementImpriComponent,
  ],
  providers: [FormLoginserve,NotificationUService],
})
export class LoginPrincipModule{
}
