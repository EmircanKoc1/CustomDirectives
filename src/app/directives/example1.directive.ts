import { Directive, ElementRef, HostBinding, HostListener, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appExample1]',
  standalone: true
})
export class Example1Directive implements OnInit {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = "red";
  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @Input()
  color!: string;

  @HostListener("click")
  onClick(): void {
    alert("html nesnesi click edildi");
  }

  @HostBinding("style.color")
  get textColor(): string {
    return "white";
  }
}
