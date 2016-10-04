import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaDirective } from './directives/fa.directive';
import { FaComponent } from './components/fa.component';
import { FaStackComponent } from './components/fa-stack.component';

@NgModule({
    imports: [CommonModule],
    declarations: [FaDirective, FaComponent, FaStackComponent],
    exports: [FaDirective, FaComponent, FaStackComponent]

})
export class Angular2FontawesomeModule {}
