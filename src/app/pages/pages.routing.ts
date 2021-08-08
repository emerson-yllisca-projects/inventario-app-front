
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { MarcasComponent } from './marcas/marcas.component';
import { CreateCategoriaComponent } from './categoria/create-categoria/create-categoria.component';
 
const routes: Routes = [
  {path: 'dashboard' , component: PagesComponent ,
  children: [
    { path: '', component: DashboardComponent , data: {titulo: 'Dashboard'} },

    {path: 'categorias' , component: CategoriaComponent , data:{titulo: 'Categorias'}},
    {path:'categorias/:accion/:id' , component:CreateCategoriaComponent },
    
    {path: 'marcas' , component: MarcasComponent , data:{ titulo:'Marcas'}},
    {path: 'account-settings' , component: AccountSettingsComponent , data: {titulo: 'Ajustes de Cuenta'}},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouterModule {}
