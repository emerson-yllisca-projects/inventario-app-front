import { Injectable } from '@angular/core';

declare var $;
@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor() { }

  public enviarNotificacion(message:string , title:string , tipo: 'success'|'info'|'error'|'warning'){
    $.toast({
      heading: title,
      text: message,
      position: 'top-right',
      loaderBg:'#ff6849',
      icon: tipo,
      hideAfter: 8000, 
      stack: 6
    });
  }
}
