
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    SidemenuComponent
  ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
//Se hace default para poder importarlo más fácil en el app.routes
export default class DashboardComponent {

}
