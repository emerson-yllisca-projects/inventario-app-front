import { HeaderComponent } from './header/header.component';
import { SideabrComponent } from './sideabr/sideabr.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    BreadcrumbsComponent,
    HeaderComponent,
    SideabrComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    SideabrComponent,
    RouterModule
  ]
})
export class SharedModule { }
