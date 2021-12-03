export class Pokemon{
constructor(nombre, foto, id, detalles){
this.nombre = nombre;
this.foto = foto;
this.id = id;
this.detalles = detalles;

}
}


export class Detalles{
    constructor(categoria, habilidad, peso, altura){
    this.categoria = categoria;
    this.habilidades = habilidad;
    this.peso = peso;
    this.altura= altura;    
    }
}