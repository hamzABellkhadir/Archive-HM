import {NgModule} from "@angular/core";
import {ArchivePrincipRoutingModule} from "./archive-princip-routing.module";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../material/material.module";
import {ArchivePrincipComponent} from "./archive-princip.component";


@NgModule({
  imports: [
    ArchivePrincipRoutingModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ArchivePrincipComponent,
  ],
  providers: [],
})
export class ArchivePrincipModule {
}
