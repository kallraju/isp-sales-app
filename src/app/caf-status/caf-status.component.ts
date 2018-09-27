import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-caf-status',
  templateUrl: './caf-status.component.html',
  styleUrls: ['./caf-status.component.css']
})
export class CAFStatusComponent implements OnInit {
  CAFStatus: any;
  
  constructor(private objHttp: ServiceService) { }


  ngOnInit() {
    this.objHttp.cafstatus().subscribe(data =>{
      this.CAFStatus = data;
    })
  }
}
