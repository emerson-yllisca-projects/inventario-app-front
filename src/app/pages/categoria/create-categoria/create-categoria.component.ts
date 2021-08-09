import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria.service';
import { CategoriaUnicaResponse } from '../../../models/categoria';
import { NotificacionService } from '../../../services/notificacion.service';

declare var $;
@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit , OnDestroy{
  listaEstadosCategoria:any = [];

 CategoriaForm: FormGroup;
 accion:string= '';
 estadoCategoriaTemp:boolean;
 categoriaNueva:boolean = false;
 categoriaCreada:boolean = false; 
 

  constructor(
    private router : Router,
    private routerActive: ActivatedRoute,
    private categoriaService:CategoriaService,
    private fb: FormBuilder,
    private notificacion:NotificacionService
  ) { 
    this.listaEstadosCategoria = this.categoriaService.listaEstados;
  }
  ngOnDestroy(): void {
      this.accion = '';
    
  }

  ngOnInit(): void {

    this.inicializarFormulario();

    this.routerActive.paramMap.subscribe(params => {

        const id = params.get('id');

        this.accion = params.get('accion').toUpperCase();
        if(this.accion == 'EDITAR') {
          this.categoriaService.listOneCategory(`categorias?id=${id}`).subscribe(
            ({categoria}:CategoriaUnicaResponse) => {
    
              this.CategoriaForm.controls["id"].setValue(categoria.id);
              this.CategoriaForm.controls["nombreCategoria"].setValue(categoria.categoria_nombre)
              this.CategoriaForm.controls["descripcionCategoria"].setValue(categoria.categoria_descripcion)
              this.CategoriaForm.controls["estadoCategoria"].setValue(categoria.categoria_estado);
              
             this.estadoCategoriaTemp =  this.CategoriaForm.get("estadoCategoria").value;
      
          });
        }
        else if(this.accion == 'NUEVO'){
          this.categoriaNueva  = true;
        }

    })
    
  }

  inicializarFormulario(){
    this.CategoriaForm = this.fb.group({
      id:[""],
      nombreCategoria: ["", Validators.required],
      descripcionCategoria: ["" ],
      estadoCategoria : [true, Validators.required],
    });
  }

  crearCategoria(){
    let payload = {};
    let url = '';
    
    payload["categoria_nombre"] = this.CategoriaForm.get("nombreCategoria").value;
    payload["categoria_descripcion"] = this.CategoriaForm.get("descripcionCategoria").value;
    payload["categoria_estado"] = this.CategoriaForm.get("estadoCategoria").value;

    if(this.accion == 'EDITAR'){
      url = `categorias/update`
    }else{
      url = 'categorias/create'
    }

    this.categoriaService.createCategoria(url , payload ).subscribe(  
      (res:any) => {
        this.notificacion.enviarNotificacion(res.msg , 'Creacion Exitosa' , 'success')
        this.volver();
      });
  }

  volver(){
    this.router.navigateByUrl(`dashboard/categorias`);
  }
}
