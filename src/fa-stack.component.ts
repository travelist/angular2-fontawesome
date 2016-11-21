import {Component, ElementRef, Input, SimpleChange} from '@angular/core';
import {NgClass} from '@angular/common';

//
// FaStackComponent is not supported yet
//
@Component({
  selector: 'fa-stack',
  template: '<i [ngClass]="classList"></i>'
})
export class FaStackComponent {
  @Input() size: number; // "1-5" <i class="fa-stack fa-3x"></i>
  private classList: Array<string>;

  constructor() { this.classList = ['fa-stack']; }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (var key in changes) {
      if (key === 'size')
        var previousValue = changes[key].previousValue;
        var currentValue  = changes[key].currentValue;
        if ([1, 2, 3, 4, 5].indexOf(currentValue) >= 0) {
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
      }
  }

  private addFaClass(className:string):void {
    // better to check the uniquness
    this.classList.push(className);
  }

  private removeFaClass(className:string):void {
    var index:number;
    if ((index = this.classList.indexOf(className)) >= 0) {
      this.classList.splice(index, 1);
    }
  }
}
