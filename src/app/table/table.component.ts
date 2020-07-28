import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-server',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() header:any =[];
  @Input() data :any = [];
  rowData:any;
  a:any;
  element:any;
  _object = Object;

  constructor() { }

  ngOnInit() {
    let objectKeys = Object.keys(this.data[0]);
    this.rowData = objectKeys;


   


    




    
  }

}
