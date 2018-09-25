import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
frm:FormGroup;
username;
password;
  constructor() { 
    this.frm=new FormGroup({
     un: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
     ps: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(5)])
    });

    this.username=this.frm.controls["un"];
    this.password=this.frm.controls["ps"];
  }
  sendingdata;

  click(something){
    this.sendingdata=something
    /*document.write(JSON.stringify(this.sendingdata))*/
    console.log(this.sendingdata)
  }

}

 
