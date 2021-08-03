import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme') || './assets/css/colors/blue-dark.css'; 
    this.linkTheme.setAttribute('href' , url )
  }
  changeTheme(theme:string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href' ,url);
    localStorage.setItem('theme' , url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme():void {
    const link  = document.querySelectorAll('.selector') ; 

    link.forEach(element => {
     element.classList.remove('working');   //eliminar la clase working
     const btnTheme   = element.getAttribute('data-theme');
     const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
     const currentTheme = this.linkTheme.getAttribute('href');
     if(btnThemeUrl === currentTheme){
       element.classList.add('working')
     }
   })
 } 
}
