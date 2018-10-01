import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import * as sha512 from 'js-sha512';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  Status: string;
  lData: any = {};
  frm:FormGroup;

  constructor(private objService:ServiceService,private objrouter:Router, private obj:FormBuilder) { 
    this.frm=this.obj.group({
     un: ['',[Validators.required]],
     pwd: ['',[Validators.required]]
    });
  }
  onSubmit() {
    this.frm.value.pwd = sha512.sha512(this.frm.value.pwd);
this.objService.login(this.frm.value).subscribe(data => {
    this.lData = data;
        if (this.lData !== undefined && this.lData.status === 1) {
            localStorage.setItem('Id', this.lData.user_id);
            this.objrouter.navigate(['menu'])
      } else if (this.lData !== undefined && this.lData.status === 0) {
            localStorage.removeItem('Id');
            this.Status = 'Please provide valid username and password';
           }
         },
         err =>  {
           this.Status = 'Something went wrong please try again';
         });
       }
}

 
