import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements CanActivate {
  urlLogin = 'http://103.263.168.73.3000/login';

  constructor(private objHTTP: HttpClient, private objrouter: Router) { }
  login(frmLoginObj) {
    return this.objHTTP.post(this.urlLogin, frmLoginObj).pipe(map(res => res));
  }
  canActivate() {
    console.log(localStorage.getItem('U_Id' ));
    if (localStorage.getItem('U_Id' ) !== null) {
      this.objrouter.navigate(['']);
      return false;
    }
    return true;
  }

}
