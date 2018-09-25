import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements CanActivate {
    urlLogin = 'http://103.263.168.73.3000/login';
    urltask='http://103.253.168.73.3000/task/list';
    urlsalesreport='http://103.253.168.73.3000/sales/reports';
    urlcafstatus='http://103.253.168.73.3000/caf/status';
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
  cafstatus(frmcafstatusObj) {
    return this.objHTTP.post(this.urlcafstatus, frmcafstatusObj).pipe(map(res => res));
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
