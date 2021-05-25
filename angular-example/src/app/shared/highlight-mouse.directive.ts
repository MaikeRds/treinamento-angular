import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._rederer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._rederer.setStyle(this._elementRef.nativeElement, 'background-color', '#FFF')
    this.backgroundColor = '#FFF';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '#FFF';

  constructor(
    private _elementRef:  ElementRef,
    private _rederer: Renderer2
  ) {

  }

}
