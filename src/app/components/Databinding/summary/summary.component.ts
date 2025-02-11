import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  tableData = [
    { type: 'Interpolation', syntax: '{{ value }}', direction: 'Component → Template' },
    { type: 'Property Binding', syntax: '[property]="value"', direction: 'Component → Template' },
    { type: 'Event Binding', syntax: '(event)="handler()"', direction: 'Template → Component' },
    { type: 'Two-Way Binding', syntax: '[(ngModel)]="value"', direction: 'Component ⇄ Template' }
    
  ];
}
