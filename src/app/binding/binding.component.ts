import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  msj="Ingrese datos";
  msjBtn="Enviar";
  nombre="Pepe";
  constructor() { }

  /**
   * Enviar
   * @param e: Evento del click 
   */
  public Enviar(e) 
  {
    console.log(e);
  }

  ngOnInit() {
  }

}
