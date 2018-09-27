import { Component, OnInit } from '@angular/core';
import {DataService} from "../servicios/data.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http:DataService) { }
  ngOnInit() 
  {
    this.http.sinToken().subscribe(data=>{console.log(data);},
    Err=>{console.log(Err);}
    );
    this.http.Token().subscribe(data=>{console.log(data);},
    Err=>{console.log(Err);}
    );

    this.http.Listado().subscribe(data=>{console.log(data);},
    Err=>{console.log(Err);}
    );
  }

}
