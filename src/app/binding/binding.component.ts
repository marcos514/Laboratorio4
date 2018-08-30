import { Component, OnInit , OnChanges , AfterViewInit , OnDestroy ,SimpleChanges } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit,OnChanges,OnDestroy,AfterViewInit {
  nombre="";
  apellido="";
  sueldo="";

  /**
   * Solo cuando se carga la pagina
   */
  ngAfterViewInit(): void {
    console.log("En after View Init");
  }

  /**
   * Cuando cambia algo de la estructura del html se activa
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log("En el change");
  }

  /**
   * Cuando se destrulle algo del html se activa
   */
  ngOnDestroy(): void {
    console.log("En on destroy");
  }

  lista=[];
  constructor() { }

  /**
   * Enviar
   * @param e: Evento del click 
   */
  public Enviar() 
  {
    let persona:Persona=new Persona(this.nombre,this.apellido,this.sueldo);
    this.lista.push(persona);
    console.log(this.lista);
    
  }

  ngOnInit() {
    console.log("En On Init");
  }

}
