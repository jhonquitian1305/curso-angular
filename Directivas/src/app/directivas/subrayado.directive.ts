import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  @Input('appSubrayado') config: any;

  @HostBinding('class') isHover: string = '';

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    // elem.nativeElement.style.textDecoration = 'underline';
    this.config = {
      colorHover: 'green',
      colorNoHover: 'red'
    }
    this.renderer.setStyle(this.elem.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'indigo');
  }

  @HostListener('mouseover') onHover(){
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorHover);
    this.isHover = 'hover';
  }

  @HostListener('mouseout') onMouseOut(){
    this.renderer.setStyle(this.elem.nativeElement, 'color', this.config.colorNoHover);
    this.isHover = 'noHover';
  }
}
