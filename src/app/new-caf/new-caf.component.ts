import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-new-caf',
  templateUrl: './new-caf.component.html',
  styleUrls: ['./new-caf.component.css']
})
export class NEWCAFComponent implements OnInit {
  Status: string;
  lData: any = {};
  ravi: any= {};
  frm:FormGroup;
  selectedFile_Photo_Graph: File;
  selectedFile_Id_Proof: File;
  selectedFile_Addr_Proof: File;
  constructor(private objService:ServiceService,private objrouter:Router, private obj:FormBuilder) {
    this.frm=this.obj.group({
      aplicant_name:['',Validators.required],
      dob:['', Validators.required],
      city:['',Validators.required],
      contact_no_resi:['', Validators.required],
      email_id:['',Validators.required],
      permanent_address:['',Validators.required],
      father_or_mothers_name:['',Validators.required],
      installation_address:['',Validators.required],
      google_location:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],
      contact_no_office:['',Validators.required],
      mobile:['',Validators.required],
      pan_gst:['',Validators.required],
      addr_proof:['',[]],
      photo_graph:['',[]],
      id_proof:['',[]],
      plan_details : ['',[]],
      plan_duration : ['',[]],
      payment_mode : ['',[]],
      lamount : ['',[]],
      un: ['',[Validators.required]],
      otp: ['',[Validators.required]],

     });
   }
   onFileSelected_Photo_Graph(event){
    this.selectedFile_Photo_Graph=<File>event.target.files[0];
   }
   onFileSelected_Id_Proof(event){
    this.selectedFile_Id_Proof=<File>event.target.files[0];
   }
   onFileSelected_Addr_Proof(event){
    this.selectedFile_Addr_Proof=<File>event.target.files[0];
   }
   onsend(){
     const fd = new FormData();
     alert(this.selectedFile_Photo_Graph.name);
     fd.append('photo_graph',this.selectedFile_Photo_Graph,this.selectedFile_Photo_Graph.name);
     fd.append('id_proof',this.selectedFile_Id_Proof,this.selectedFile_Id_Proof.name);
     fd.append('addr_proof',this.selectedFile_Addr_Proof,this.selectedFile_Addr_Proof.name);
     fd.append('applicant_name',this.frm.value.applicant_name);
     fd.append('dob',this.frm.value.dob);
     fd.append('fathers_or_mothers_name',this.frm.value.fathers_or_mothers_name);
     fd.append('installation_address',this.frm.value.installation_address);
     fd.append('google_location',this.frm.value.google_location);
     fd.append('city',this.frm.value.city);
     fd.append('state',this.frm.value.state);
     fd.append('pincode',this.frm.value.pincode);
     fd.append('contact_no_resi',this.frm.value.contact_no_resi);
     fd.append('contact_no_office',this.frm.value.contact_no_office);
     fd.append('mobile',this.frm.value.mobile);
     fd.append('email_id',this.frm.value.email_id);
     fd.append('pan_gst',this.frm.value.pan_gst);
     fd.append('permanent_address',this.frm.value.permanent_address);
     fd.append('plan_details',this.frm.value.plan_details);
     fd.append('plan_duration',this.frm.value.plan_duration);
     fd.append('lamount',this.frm.value.lamount);
     fd.append('payment_mode',this.frm.value.payment_mode);
      this.objService.cafadd(fd).subscribe(data => {
        this.lData = data;
        alert(JSON.stringify(JSON.stringify(this.lData)));
      });
     //this.objService.cafadd(this.frm.value).subscribe(data => this.lData = data);
   }
   
  ngOnInit() {
  }

}
