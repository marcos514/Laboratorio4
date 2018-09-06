import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit/*,OnChanges*/ {
  lista=[];
  primera=0;

  @Output() cantidad = new EventEmitter<number>();

  @Input()
  public set persona(p : string) {
    if(this.primera>1)
    this.lista.push(p);
    else
    this.primera++;

    this.cantidad.emit(this.lista.length);

  }

  /**
   * Mejorar como consigo la lista despues.
   */
  @Input()
  public set personas(listas)
  {
    if(this.primera>1)
    {
      this.lista=listas;
      /*for (let i = 0; i < listas.length; i++) {
        let persona:Persona = listas[i];
        this.lista.push(persona);
      }*/   
    }
    else
    this.primera++
    console.log(listas);
    this.cantidad.emit(this.lista.length);
    
  }

  constructor() {}

  ngOnInit() {
  }

}
