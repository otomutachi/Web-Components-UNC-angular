import { Component, signal } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { CommonModule } from '@angular/common';
import { SearchBar } from './search-bar/search-bar';
import { StatsPanel } from './stats-panel/stats-panel';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    UserCard,
    StatsPanel,
    SearchBar,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  protected readonly title = signal('social-app');

  totalLikes = 0;
  totalFollows = 0;

  users = [
    {
      name: "Alice",
      bio: "Frontend dev",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Bob",
      bio: "Designer",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Charlie",
      bio: "Fullstack",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];

  filteredUsers = this.users;

  onLiked(count: number) {
    this.totalLikes += count;
  }

  onSearch(query: string) {
    const q = query.toLowerCase().trim();

    if (!q) {
      this.filteredUsers = this.users;
      return;
    }

    this.filteredUsers = this.users.filter(u =>
      u.name.toLowerCase().includes(q)
    );
  }

  onFollowToggled(isFollowing: boolean) {
    if (isFollowing) {
      this.totalFollows++;
    } else {
      this.totalFollows--;
    }
  }
}