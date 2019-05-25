import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPrincipComponent} from "./login-princip.component";



const routess: Routes = [
  {
    path:'',
    component: LoginPrincipComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routess)],
  exports: [RouterModule],

})
export class LoginPrincipRoutingModule {
}

