import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements CanActivate {
    urlLogin = 'http://103.253.168.73:3000/login';
    urltask='http://103.253.168.73:3000/task/list';
    urlsalesreport='http://103.253.168.73:3000/sales/reports';
    urlcafstatus='http://103.253.168.73:3000/caf/status';
    urlcafadd='http://103.253.168.73:3000/caf/add';
constructor(private objHTTP: HttpClient, private objrouter: Router) { }
  login(frmLoginObj) {
    return this.objHTTP.post(this.urlLogin, frmLoginObj).pipe(map(res => res));
  }
  task(frmtaskObj) {
    return this.objHTTP.post(this.urltask, frmtaskObj).pipe(map(res => res));
  }
  salesreport(frmsalesreportObj) {
    return this.objHTTP.post(this.urlsalesreport, frmsalesreportObj).pipe(map(res => res));
  }
  //cafstatus(){
  //  return this.objHTTP.get(this.urlcafstatus).pipe(map(res => res));
  //}
  cafstatus(){
    return this.objHTTP.get(this.urlcafstatus).pipe(map(res => res));
  }
  cafadd(frmcafaddObj) {
    return this.objHTTP.post(this.urlcafadd, frmcafaddObj).pipe(map(res => res));
  }
  
   canActivate() {
    console.log(localStorage.getItem('Id' ));
    if (localStorage.getItem('Id' ) == null) {
      this.objrouter.navigate(['']);
      return false;
    }
    return true;
  }

}
