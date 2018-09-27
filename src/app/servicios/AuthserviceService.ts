import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService implements CanActivate {

    canActivate()
    {
        if(localStorage.getItem("Token"))
        {
            return true;
        }
        return false;
    }
  constructor() { }
}