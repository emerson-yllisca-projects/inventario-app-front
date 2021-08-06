import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main' , url: '/'},
        {titulo: 'ProgressBar' , url: 'progress'},
        {titulo: 'Rxjs' , url: 'rxjs'},
        {titulo: 'Graficas' , url: 'grafica1'},
        {titulo: 'Promesas' , url:'promesas'}
      ]
    },
    {
      titulo:'Mantenimiento',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Categorias' , url: 'categoria'},
        {titulo: 'Marcas' , url: 'marcas'},
        {titulo: 'Proveedores' , url: '/'},
      ]
    },
   
  ];

  constructor() { }
}
