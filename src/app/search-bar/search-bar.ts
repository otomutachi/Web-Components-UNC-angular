import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  query = '';

  @Output() searchChanged = new EventEmitter<string>();

  onChange() {
    this.searchChanged.emit(this.query);
  }
}