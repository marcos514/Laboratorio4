import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {JwtHelperService} from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class authserviceService implements CanActivate {
  helper=new JwtHelperService();

  canActivate()
  {
    console.log(localStorage.getItem("Token"));
    console.log(this.helper.getTokenExpirationDate(localStorage.getItem("Token")));
    console.log(this.helper.decodeToken(localStorage.getItem("Token")))
      if(this.helper.isTokenExpired(localStorage.getItem("Token")))
      {
          return true;
      }
      this.router.navigate(["/grilla"]);

      //this.router.navigate(["facebook.com"]);
      
      return false;
  }
  constructor(private router:Router) { }
}
