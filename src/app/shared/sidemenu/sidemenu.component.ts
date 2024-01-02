import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {

  public menuItems = routes
  .map( route => route.children ?? [] )
  .flat()
  .filter( route => route && route.path )
  .filter( route => !route.path?.includes(':') ) //para excluir el user/:id
  .filter( route => !route.path?.includes('**'))

  constructor() {
    //guardamos las rutas que queremos que estén accesibles desde el menú
    // const dashboardRoutes = routes
    //   .map( route => route.children ?? [] )
    //   .flat()
    //   .filter( route => route && route.path )
    //   .filter( route => !route.path?.includes(':') ) //para excluir el user/:id
    //   .filter( route => !route.path?.includes('**'))

    //   console.log(dashboardRoutes);
  }

}
