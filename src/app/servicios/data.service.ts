import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from "@angular/common/http";


const CONFIG={headers:new HttpHeaders({token:localStorage.getItem("Token")})};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }

  public sinToken()
  {
    return this.http.get("http://192.168.2.57:3000/sinToken");
  }

  public Token()
  {
    return this.http.post("http://192.168.2.57:3000/token",
    {
      user:
      {
        nombre:"Marcos",
        nivel:2,
        at:"9999999999999999"
      }});
  }

  LogIn(usr,pass)
  {
    return this.http.post("http://192.168.2.57:3000/token",
    {
      user:
      {
        usuario:usr,
        contrasena:pass,
      }});
  }

  Listado()
  {
    return this.http.get("http://192.168.2.57:3000/Listado",CONFIG);
  }


}
