import { Component } from '@angular/core';
import { FaComponent } from 'angular2-fontawesome/components'
import { FaDirective } from 'angular2-fontawesome/directives'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [FaComponent, FaDirective],
  styleUrls: ['app.component.css', '../vendor/font-awesome/css/font-awesome.css']
})
export class AppComponent {
  title = 'app works!';
}
