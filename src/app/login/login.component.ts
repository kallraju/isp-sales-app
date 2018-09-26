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
     un: new FormControl('',[Validators.required]),
     pwd: new FormControl('',[Validators.required])
    });

    this.username=this.frm.controls["un"];
    this.password=this.frm.controls["pwd"];
  }
  onSubmit() {
this.objService.login(this.frm.value).subscribe(data => {
    this.lData = data;
    alert(JSON.stringify(this.lData));
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

 
