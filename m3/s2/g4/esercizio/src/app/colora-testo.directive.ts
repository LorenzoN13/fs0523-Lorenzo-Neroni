import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColoraTesto]'
})
export class ColoraTestoDirective {

  constructor(private element:ElementRef){
    this.element.nativeElement.style.background ='red';
   }

}
