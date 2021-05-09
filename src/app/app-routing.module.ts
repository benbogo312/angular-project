import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAdminComponent } from './comps/app-admin/app-admin.component';
import { LoginComponent } from './comps/login/login.component';
import { ProdsComponent } from './firecomps/prods/prods.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"fire", component:ProdsComponent},
  {path:"admin", component:AppAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
