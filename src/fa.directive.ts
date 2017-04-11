import { Directive, ElementRef, Input, SimpleChange} from '@angular/core';

@Directive({
  selector: '[fa]',
  inputs: ['name', 'alt', 'size', 'stack', 'flip', 'pull', 'rotate', 'border', 'spin', 'fw', 'inverse']
})
export class FaDirective {
  static sizeValidator:RegExp = /[1-5]/;
  static flipValidator:RegExp = /['horizontal'|'vertical']/;
  static pullValidator:RegExp = /['right'|'left']/;
  static rotateValidator:RegExp = /[90|180|270]/;

  public name:string; // fa-'name'
  public alt:string; // Currently not supported yet
  public size:number; // [1-5] fa-[lg|2-5]x
  public stack:number; // [1-5] fa-stack-[lg|2-5]x
  public flip:string; // [horizontal|vertical] fa-flip-[horizontal|vertical]
  public pull:string; // [right|left] fa-pull-[right|left]
  public rotate:number; // [90|180|270] fa-rotate-[90|180|270]
  public border:boolean; // true fa-border
  public spin:boolean; // true fa-spin
  public fw:boolean; // true fa-fw
  public inverse:boolean; // true fa-inverse

  private el:HTMLElement;

  constructor(el:ElementRef) {
    this.el = el.nativeElement;
    this.el.classList.add('fa');
  }

  ngOnChanges(changes:{[propertyName: string]: SimpleChange}) {
    for (var key in changes) {
      var previousValue = changes[key].previousValue;
      var currentValue = changes[key].currentValue;

      switch (key) {
        case 'name':
          if (typeof previousValue === 'string') {
            this.el.classList.remove(`fa-${previousValue}`);
          }
          this.el.classList.add(`fa-${currentValue}`);
          break;

        case 'alt':
          // TODO(Write code for the alt parameter)
          break;

        case 'size':
          if (FaDirective.sizeValidator.test(currentValue)) {
            if (previousValue === 1) {
              this.el.classList.remove('fa-lg');
            } else if (typeof previousValue === 'string') {
              this.el.classList.remove(`fa-${previousValue}x`);
            }
            if (currentValue === 1) {
              this.el.classList.add('fa-lg');
            } else {
              this.el.classList.add(`fa-${currentValue}x`);
            }
          }
          break;

        case 'stack':
          if (FaDirective.sizeValidator.test(currentValue)) {
            if (typeof previousValue === 'string') {
              this.el.classList.remove(`fa-stack-${previousValue}x`);
            }
            this.el.classList.add(`fa-stack-${currentValue}x`);
          }
          break;

        case 'flip':
          if (FaDirective.flipValidator.test(currentValue)) {
            if (typeof previousValue === 'string') {
              this.el.classList.remove(`fa-flip-${previousValue}`);
            }
            this.el.classList.add(`fa-flip-${currentValue}`);
          }
          break;

        case 'pull':
          if (FaDirective.pullValidator.test(currentValue)) {
            if (typeof previousValue === 'string') {
              this.el.classList.remove(`fa-pull-${previousValue}`);
            }
            this.el.classList.add(`fa-pull-${currentValue}`);
          }
          break;

        case 'rotate':
          if (FaDirective.rotateValidator.test(currentValue)) {
            if (typeof previousValue === 'string') {
              this.el.classList.remove(`fa-rotate-${previousValue}`);
            }
            this.el.classList.add(`fa-rotate-${currentValue}`);
          }
          break;

        case 'border':
          if (currentValue) {
            this.el.classList.add('fa-border');
          } else if (typeof previousValue === 'string') {
            this.el.classList.remove('fa-border');
          }
          break;

        case 'spin':
          if (currentValue) {
            this.el.classList.add('fa-spin');
          } else if (typeof previousValue === 'string') {
            this.el.classList.remove('fa-spin');
          }
          break;

        case 'fw':
          if (currentValue) {
            this.el.classList.add('fa-fw');
          } else if (typeof previousValue === 'string') {
            this.el.classList.remove('fa-fw');
          }
          break;

        case 'inverse':
          if (currentValue) {
            this.el.classList.add('fa-inverse');
          } else if (typeof previousValue === 'string') {
            this.el.classList.remove('fa-inverse');
          }
          break;
      }
    }
  }
}
