import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FontawesomeComponent } from './fontawesome.component';


import { FaDirective } from './fa.directive';
import { FaComponent } from './fa.component';
//import { FaStackComponent } from './components/fa-stack.component';


@NgModule({
    imports: [CommonModule],
    declarations: [FaDirective, FaComponent],
    exports: [FaDirective, FaComponent]
})
export class Angular2FontawesomeModule {
}
//export default FontawesomeModule;

//@NgModule({
//  imports: [CommonModule],
//  declarations: [FaDirective, FaComponent, FaStackComponent],
//  exports: [FaDirective, FaComponent, FaStackComponent]
//
//})
//export class Angular2FontawesomeModule {}
//
