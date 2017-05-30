import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaDirective } from './fa.directive';
import { FaComponent } from './fa.component';
//import { FaStackComponent } from './components/fa-stack.component';

@NgModule({
    imports: [CommonModule],
    declarations: [FaDirective, FaComponent],
    exports: [FaDirective, FaComponent],
})
export class Angular2FontawesomeModule {
}
