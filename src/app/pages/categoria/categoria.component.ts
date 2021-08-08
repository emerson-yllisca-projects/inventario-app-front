import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria, PaginacionCategoria, CategoriaResponse } from '../../models/categoria';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(
    private router:Router,
    private categoriaService:CategoriaService
  ) { }

  page:number;
  listaCategorias:Categoria[];

  accionModal:string;


  ngOnInit(): void {
    const p1 = this.inicializarComponente();
    Promise.all([p1]).then( () => {
      this.listarCategorias();
    });
  }

  inicializarComponente(){
      this.page = 0;
      this.listaCategorias = [];
      this.accionModal = '';
  }

  listarCategorias(){
    this.categoriaService.listarCategorias(`categorias?page=${this.page}`).subscribe( 
      (res:CategoriaResponse) => {
        this.listaCategorias = res.categorias.rows;
        console.log("listaCategorias" , this.listaCategorias)
      }, 
      (error) => {
        console.log("error" , error)
      }
    )
  }

  nuevo(){
    this.router.navigateByUrl(`dashboard/categorias/nuevo/`);
  }


  editar(categoria:Categoria){
      this.router.navigateByUrl(`dashboard/categorias/editar/${categoria.id}`);
  }

  elimiinar(categoria:Categoria){
    console.log("eliminar")
    console.log("categoria" ,categoria)

  }
}
