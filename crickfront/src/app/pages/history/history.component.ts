import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-call.service';
import { LiveMatchCardComponent } from '../../components/live-match-card/live-match-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';


@Component({
  selector: 'app-history',
  standalone: true,
  imports: [LiveMatchCardComponent,NgxTypedJsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  allMatches: any;
  loading=false;
  constructor(private _api:ApiService){

  }
  ngOnInit(): void {
    this.loadMatchHistory()
   }
   loadMatchHistory(){
 
     this._api.getAllMatches()
     .subscribe({
       next:data=>{
         this.allMatches=data;
       }
     })
 
   }
 

}
