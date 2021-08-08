import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria.service';
import { CategoriaUnicaResponse } from '../../../models/categoria';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {
  listaEstadosCategoria:any = [];

 CategoriaForm: FormGroup;
 accion:string= '';
 estadoCategoriaTemp:boolean;
 categoriaNueva:boolean
  constructor(
    private router : Router,
    private routerActive: ActivatedRoute,
    private categoriaService:CategoriaService,
    private fb: FormBuilder,
  ) { 
    this.listaEstadosCategoria = this.categoriaService.listaEstados;
  }

  ngOnInit(): void {
    this.inicializarFormulario();

    const {accion , id} = this.routerActive.snapshot.params;

    this.accion = accion.toUpperCase();

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
  }

  inicializarFormulario(){
    this.CategoriaForm = this.fb.group({
      id:[""],
      nombreCategoria: ["", Validators.required],
      descripcionCategoria: ["" ],
      estadoCategoria : [false, Validators.required],
    });
  }

  crearCategoria(){

  }

  volver(){
    this.router.navigateByUrl(`dashboard/categorias`);
  }
}
