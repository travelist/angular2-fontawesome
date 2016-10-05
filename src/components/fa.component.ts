import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { SimpleChange } from '@angular/core';

const FA_COMPONENT_TEMPLATE = `
  <i [ngClass]="classList"></i>
`;

@Component({
  selector: 'fa',
  template: FA_COMPONENT_TEMPLATE

})
export class FaComponent {
  static sizeValidator:   RegExp = /[1-5]/;
  static flipValidator:   RegExp = /['horizontal'|'vertical']/;
  static pullValidator:   RegExp = /['right'|'left']/;
  static rotateValidator: RegExp = /[90|180|270]/;

  @Input() name:    string; // fa-'name'
  @Input() alt:     string; // Currently not supported yet
  @Input() size:    number; // [1-5] fa-[lg|2-5]x
  @Input() stack:   number; // [1-5] fa-stack-[lg|2-5]x
  @Input() flip:    string; // [horizontal|vertical] fa-flip-[horizontal|vertical]
  @Input() pull:    string; // [right|left] fa-pull-[right|left]
  @Input() rotate:  number; // [90|180|270] fa-rotate-[90|180|270]
  @Input() border:  boolean; // true fa-border
  @Input() spin:    boolean; // true fa-spin
  @Input() fw:      boolean; // true fa-fw
  @Input() inverse: boolean; // true fa-inverse

  private classList: Array<string>;

  constructor(el: ElementRef) {
    // TODO (travelist): Support for fa-li selector
    // if (el.nativeElement.tagName == 'FA')
    // else this.classList = ['fa', 'fa-li']
    this.classList = ['fa'];
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (var key in changes) {
      var previousValue = changes[key].previousValue;
      var currentValue  = changes[key].currentValue;
      switch(key) {
        case 'name':
        this.removeFaClass(`fa-${previousValue}`);
        this.addFaClass(`fa-${currentValue}`);
        break;

        case 'alt':
        // TODO(travelist): Write code for the alt parameter
        break;

        case 'size':
        if (FaComponent.sizeValidator.test(currentValue)) {
          if (previousValue === 1) {
            this.removeFaClass('fa-lg');
          } else {
            this.removeFaClass(`fa-${previousValue}x`);
          }
          if (currentValue === 1) {
            this.classList.push('fa-lg');
          } else {
            this.classList.push(`fa-${currentValue}x`);
          }
        }
        break;

        case 'stack':
        if (FaComponent.sizeValidator.test(currentValue)) {
          this.removeFaClass(`fa-stack-${previousValue}x`);
          this.addFaClass(`fa-stack-${currentValue}x`);
        }
        break;

        case 'flip':
        if (FaComponent.flipValidator.test(currentValue)) {
          this.removeFaClass(`fa-flip-${previousValue}`);
          this.addFaClass(`fa-flip-${currentValue}`);
        }
        break;

        case 'pull':
        if (FaComponent.pullValidator.test(currentValue)) {
          this.removeFaClass(`fa-pull-${previousValue}`);
          this.addFaClass(`fa-pull-${currentValue}`);
        }
        break;

        case 'rotate':
        if (FaComponent.rotateValidator.test(currentValue)) {
          this.removeFaClass(`fa-rotate-${previousValue}`);
          this.addFaClass(`fa-rotate-${currentValue}`);
        }
        break;

        case 'border':
        if (currentValue) {
          this.addFaClass('fa-border');
        } else {
          this.removeFaClass('fa-border');
        }
        break;

        case 'spin':
        if (currentValue) {
          this.addFaClass('fa-spin');
        } else {
          this.removeFaClass('fa-spin');
        }
        break;

        case 'fw':
        if (currentValue) {
          this.addFaClass('fa-fw');
        } else {
          this.removeFaClass('fa-fw');
        }
        break;

        case 'inverse':
        if (currentValue) {
          this.addFaClass('fa-inverse');
        } else {
          this.removeFaClass('fa-inverse');
        }
        break;
      }
    }
  }

  private addFaClass(className:string):void {
    // better to check uniqueness
    this.classList.push(className);
  }

  private removeFaClass(className:string):void {
    var index:number;
    if ((index = this.classList.indexOf(className)) >= 0) {
      this.classList.splice(index, 1);
    }
  }
}
