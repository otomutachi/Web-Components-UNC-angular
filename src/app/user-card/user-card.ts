import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule], 
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css']
})
export class UserCard {

  @Input() name!: string;
  @Input() bio!: string;
  @Input() avatar!: string;

  @Input() showActions: boolean = true;

  @Output() liked = new EventEmitter<number>();
  @Output() followToggled = new EventEmitter<boolean>();

  isFollowing = false;

  like() {
    this.liked.emit(1);
  }

  toggleFollow() {
    this.isFollowing = !this.isFollowing;
    this.followToggled.emit(this.isFollowing);
  }

}