import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-match-card',
  standalone: true,
  imports: [],
  templateUrl: './live-match-card.component.html',
  styleUrl: './live-match-card.component.css'
})
export class LiveMatchCardComponent {
  @Input() data:any
}
