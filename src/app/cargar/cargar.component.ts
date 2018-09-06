import { Component, OnInit, Input } from '@angular/core';
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
  lista=[]
  persona:Persona;
  listaAux=[];

  constructor() { }

  public EnviarPersona() 
  {
    this.persona=new Persona(this.nombre,this.apellido,this.sueldo);
    this.listaAux.push(this.persona);
  }

  public CambiarArray()
  {
    let personita:Persona=new Persona(this.nombre,this.apellido,this.sueldo);
    this.listaAux.push(this.persona);
    this.lista=this.listaAux;
  }

  public Cantidad(event)
  {
    console.log(event);
    
  }
  
  ngOnInit() {
  }

}
