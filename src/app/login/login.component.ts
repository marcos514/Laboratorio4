import { Component, OnInit } from '@angular/core';
import {DataService} from "../servicios/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario;
  contrasena;
  constructor(private http:DataService) { }

  LogIn()
  {
    this.http.LogIn(this.usuario,this.contrasena).subscribe(data=>{localStorage.setItem("Token",data["token"]);console.log(data)},err=>{console.log(err)})
  }
  ngOnInit() {
  }

}
