import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  imageUrl = 'data:image/png;base64,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';
  
  }
