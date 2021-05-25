import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef:  ElementRef,
    private _rederer: Renderer2
    ) {
    //console.log(this._elementRef)
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'
    this._rederer.setStyle(_elementRef.nativeElement,'background-color', 'yellow' )
  }


}
