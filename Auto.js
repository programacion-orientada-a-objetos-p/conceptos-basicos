export default class Auto {
    constructor(marca, modelo, color ="negro", kilometraje = 0){
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._kilometraje = kilometraje;
        this._estado = "Apagado";
    }
    get color(){
        return this._color;
    }
    set color(color){
        this._color = color.toUpperCase();//Controla que este en mayusculas
    }
    mostrarEstado(){
        console.log (`El auto ${this._marca} ${this._color} del año 
        ${this._modelo} tiene un kilometraje de ${this._kilometraje}
        kms y esta ${this._estado}`);
    }
    encender (){
        this._estado = "Encendido";
        this.mostrarEstado();
    }
    apagar (){
        this._estado = "Apagar";
        this.mostrarEstado();
    }
    avanzar (velocidad, tiempo){
        if (this._estado === "Apagado"){
        console.log("El auto no puede avanzar por que esta apagado");
         } else{
             let distancia = velocidad * tiempo;
             this._kilometraje = this._kilometraje + distancia;
             this.mostrarEstado();
         }
     }
}