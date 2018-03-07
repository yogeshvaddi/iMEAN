import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {

  @Input('myFocus') isFocused: boolean;

  constructor(private hostElement: ElementRef) { }

  ngOnInit() {
    if (this.isFocused) {
      this.hostElement.nativeElement.focus();
    }
  }

}
