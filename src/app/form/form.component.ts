import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  personas;
  persona;
  cantidad;

  public CargarLista(event)
  {
    this.personas=event;
  }

  public CargarPersona(event)
  {
    this.persona=event;
  }

  public TomarCantidad(event)
  {
    this.cantidad=event;
  }


  title = 'app';
}
