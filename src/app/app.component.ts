import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarClosed = false;
  isDarkMode = false;
  activeDropdown: string | null = null;
  selectedTopic: string | null = null;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  toggleDropdown(topic: string) {
    this.activeDropdown = this.activeDropdown === topic ? null : topic;
  }

  loadContent(topic: string) {
    this.selectedTopic = topic;
  }
}