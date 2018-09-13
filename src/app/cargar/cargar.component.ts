import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Persona } from '../persona';
import {Router} from "@angular/Router";

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {
  ruta:Router;
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

  Navegar()
  {
    this.ruta.navigate(["grilla"])
  }
  
  ngOnInit() {
  }

}
