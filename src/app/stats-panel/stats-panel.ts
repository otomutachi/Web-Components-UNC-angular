import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCard } from '../user-card/user-card';

@Component({
  selector: 'app-stats-panel',
  imports: [CommonModule, UserCard],
  templateUrl: './stats-panel.html',
  styleUrls: ['./stats-panel.css']
})
export class StatsPanel {

  @Input() userCount: number = 0;
  @Input() totalLikes: number = 0;
  @Input() totalFollows: number = 0;

  @Input() users: any[] = [];

}