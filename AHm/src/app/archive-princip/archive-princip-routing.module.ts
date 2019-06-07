import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArchivePrincipComponent} from "./archive-princip.component";
import {ProfilComponent} from "./profil/profil.component";
import {TousPersonnelTabComponent} from "./parametre/personnel/tous-personnel-tab/tous-personnel-tab.component";
import {AjouterpersonnelComponent} from "./parametre/personnel/ajouterpersonnel/ajouterpersonnel.component";
import {ParametreComponent} from "./parametre/parametre.component";
import {DivisionServiceComponent} from "./parametre/division-service/division-service.component";
import {UtilisateurComponent} from "./parametre/utilisateur/utilisateur.component";


const routes:Routes = [
  {
    path:'menu',
    component : ArchivePrincipComponent,
    children: [
      { path: 'profile', component: ProfilComponent },
      { path: 'Parametre', component: ParametreComponent,
        children: [
          {path : 'personnel' , component : TousPersonnelTabComponent},
          {path : 'division_service', component : DivisionServiceComponent},
          {path : 'utilisateur', component : UtilisateurComponent}
        ]
      } ,

      ]
  }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchivePrincipRoutingModule {
}
