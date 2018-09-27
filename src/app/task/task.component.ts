import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private objHttp:ServiceService) { }

  ngOnInit() {
    this.objHttp.task().subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }

}
