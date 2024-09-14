import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-call.service';
import { LiveMatchCardComponent } from '../../components/live-match-card/live-match-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';


@Component({
  selector: 'app-live',
  standalone: true,
  imports: [LiveMatchCardComponent,NgxTypedJsModule],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{
  constructor(private _api:ApiService){

  }
  
  liveData: any;
  loading = false
  
  ngOnInit(): void {
    this.loadScore()
  }

  loadScore() {
    this.loading = true
    
    this._api.getLiveScore().subscribe({
      next: data => {
        this.liveData = data;
        
        // console.log("hello")
        console.log(this.liveData);    
        this.loading = false
      },
      error: (error) => {
        console.log(error)
        this.loading = false
      }
    })

  }

  refreshScore() {

    
    this.loadScore()
  }

}
