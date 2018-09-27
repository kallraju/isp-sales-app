import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  constructor(private objHttp:ServiceService) { }

  ngOnInit() {
    this.objHttp.salesreport().subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }

}
