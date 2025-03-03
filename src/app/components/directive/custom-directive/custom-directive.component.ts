import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent {

  increaseSize(element: HTMLElement) {
    element.style.fontSize = '24px';
  }

  resetSize(element: HTMLElement) {
    element.style.fontSize = '16px';
  }

}
