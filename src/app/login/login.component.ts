import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  Status: string;
  lData: any = {};
frm:FormGroup;
username;
password;
  constructor(private objService:ServiceService,private objrouter:Router) { 
    this.frm=new FormGroup({
     un: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
     ps: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(5)])
    });

    this.username=this.frm.controls["un"];
    this.password=this.frm.controls["ps"];
  }
 
}

 
