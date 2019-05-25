import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArchivePrincipComponent} from "./archive-princip.component";


const routes:Routes = [
  {
    path:'archive',
    component : ArchivePrincipComponent
  }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivePrincipRoutingModule {
}
