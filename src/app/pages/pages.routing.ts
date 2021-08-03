
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CategoriaComponent } from './categoria/categoria.component';
 
const routes: Routes = [
  {path: 'dashboard' , component: PagesComponent ,
  children: [
    { path: '', component: DashboardComponent , data: {titulo: 'Dashboard'} },
    {path: 'categoria' , component: CategoriaComponent , data:{titulo: 'Categorias'}},
    {path: 'account-settings' , component: AccountSettingsComponent , data: {titulo: 'Ajustes de Cuenta'}},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouterModule {}
