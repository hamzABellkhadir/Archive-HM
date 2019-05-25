import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path:'login-princip',
    loadChildren:'app/login-princip/login-princip.module#LoginPrincipModule'
  },
  {
    path:'archive-princip',
    loadChildren: 'app/archive-princip/archive-princip.module#ArchivePrincipModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
