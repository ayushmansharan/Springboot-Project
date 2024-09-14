import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-call.service';
import { LiveMatchCardComponent } from '../../components/live-match-card/live-match-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [LiveMatchCardComponent,NgxTypedJsModule,CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit{
  pointTable: any;
  pointTableRow:any

  constructor(private _api:ApiService){

  }

  ngOnInit(): void {
    this.loadTable();
  }
  loadTable() {
    this._api.getCWC2023PointTable().subscribe({
      next: (data) => {
        this.pointTable = data;
        console.log(this.pointTable);        
        this.pointTableRow=[...this.pointTable[0]]
       
        this.pointTable=this.pointTable.filter((item:any,index:any)=>index>0)   
        
      },
    });
  }

}
