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

  // toggleTheme() {
  //   this.isDarkMode = !this.isDarkMode;
  // }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;  // Toggle between light and dark mode

    if (this.isDarkMode) {
      // Set dark mode styles
      document.body.style.backgroundColor = '#333333';  // Dark background
      document.body.style.color = '#ffffff';  // Light text color
    } else {
      // Set light mode styles
      document.body.style.backgroundColor = '#ffffff';  // Light background
      document.body.style.color = '#000000';  // Dark text color
    }
  }

  
  toggleDropdown(topic: string) {
    this.activeDropdown = this.activeDropdown === topic ? null : topic;
  }

  loadContent(topic: string) {
    this.selectedTopic = topic;
  }

  
}