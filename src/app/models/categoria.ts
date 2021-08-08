export class Categoria{ 
    id:number;
    categoria_nombre: string;
    categoria_descripcion: string;
    categoria_estado:boolean;
    createdAt:Date;
    updatedAt:Date;
}

export class PaginacionCategoria{
    totalItems:number;
    rows:Categoria[];
    totalPages:number;
    currentPage:number;

    constructor(){
        this.rows = [];
    }

}

export interface CategoriaResponse {
    ok:boolean,
    categorias:PaginacionCategoria;
}

export interface CategoriaUnicaResponse{
    ok:boolean,
    categoria:Categoria;
}

