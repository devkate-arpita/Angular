import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  
    @HostListener('mouseenter') onMouseEnter()
    {
      this.renderer.setStyle(this.el.nativeElement,'backgroundColor','yellow');
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.renderer.setStyle(this.el.nativeElement,'backgroundColor','transparent');
    }
  

}
