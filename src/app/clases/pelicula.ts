export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    fechaEstreno:string;
    cantidadPublico:number;
    fotoPelicula:string;
    activo:boolean = true;
    actores:number[] = [];
}
