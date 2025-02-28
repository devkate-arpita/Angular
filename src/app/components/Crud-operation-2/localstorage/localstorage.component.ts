import { Component } from '@angular/core';
import { LocalstorageService } from './localstorage.service';


@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent {
  userData: any = { name: '', email: '' };
  storedData: any = null;

  constructor(private localStorageService: LocalstorageService) { }

  loadData() {
    this.storedData = this.localStorageService.getItem('user');
  }

  saveData() {
    this.localStorageService.setItem('user', this.userData);
    this.loadData();  // Refresh the stored data after saving
  }

  clearData() {
    this.localStorageService.removeItem('user');
    this.storedData = null;
  }

}
