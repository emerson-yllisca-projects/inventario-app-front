import { ComponentsModule } from './../components/components.module';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { MarcasComponent } from './marcas/marcas.component';
import { CategoriaService } from '../services/categoria.service';
import { MarcasService } from '../services/marcas.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategoriaComponent } from './categoria/create-categoria/create-categoria.component';
import { BrowserModule } from '@angular/platform-browser';
import { NotificacionService } from '../services/notificacion.service';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    CategoriaComponent,
    MarcasComponent,
    CreateCategoriaComponent
    ],
  imports: [
    CommonModule , SharedModule, AppRoutingModule, FormsModule, ComponentsModule,
    ReactiveFormsModule, HttpClientModule,
    BrowserModule
  ],
  providers:[
    CategoriaService,
    MarcasService,
    NotificacionService
  ],
  exports: [
    CommonModule ,
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
