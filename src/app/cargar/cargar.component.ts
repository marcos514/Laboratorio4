import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Persona } from '../persona';
@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {
  nombre="";
  apellido="";
  sueldo="";
  @Output() personaEnviar = new EventEmitter();
  @Output() listaEnviar = new EventEmitter();
  listaAux=[];
  @Input() cantidad;


  constructor() { }

  public EnviarPersona() 
  {
    let personaAux=new Persona(this.nombre,this.apellido,this.sueldo);
    this.listaAux.push(personaAux);
    this.personaEnviar.emit(personaAux);

  }

  public CambiarArray()
  {
    let personaAux:Persona=new Persona(this.nombre,this.apellido,this.sueldo);
    this.listaAux.push(personaAux);
    this.listaEnviar.emit(this.listaAux);
  }
  
  ngOnInit() {
  }

}
