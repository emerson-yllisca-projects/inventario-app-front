import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaginacionCategoria, CategoriaResponse, CategoriaUnicaResponse } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlBase = environment.baseUrl
  listaEstados:any[] = [
    {
      nombre:'Activo',
      value:true
    },
    {
      nombre:'Inactivo',
      value:false
    }
  ]
  
  constructor(
    private http: HttpClient
  ) { }

  public listarCategorias(url):Observable<CategoriaResponse>{
    return this.http.post(`${this.urlBase}/${url}` , {})
    .pipe(
        map( (res:any) => {
              return res;
        }),
        catchError(error => {
          return error
        })
      )       
  }

  public listOneCategory(url):Observable<CategoriaUnicaResponse>{
    return this.http.get(`${this.urlBase}/${url}`)
    .pipe(
      map( (res:any) => {
        return res;
      }),
      catchError( error => {
        return error
      })
    );
  }
 
  public createCategoria(url , data){

    return this.http.post(`${this.urlBase}/${url}` , data)
    .pipe(
      map((res) => {
         return res
      })
    )
  }

}
