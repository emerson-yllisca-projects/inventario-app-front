import { ComponentsModule } from './../components/components.module';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { MarcasComponent } from './marcas/marcas.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    CategoriaComponent,
    MarcasComponent
    ],
  imports: [
    CommonModule , SharedModule, AppRoutingModule, FormsModule, ComponentsModule
  ],
  exports: [
    CommonModule ,
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
