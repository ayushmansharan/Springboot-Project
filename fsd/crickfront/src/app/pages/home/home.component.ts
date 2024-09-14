import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-call.service';
import { LiveMatchCardComponent } from '../../components/live-match-card/live-match-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LiveMatchCardComponent,NgxTypedJsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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
