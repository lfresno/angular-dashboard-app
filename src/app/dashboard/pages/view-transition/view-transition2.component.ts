import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
    <shared-title title="View Transition"/>

    <section class="flex justify-end">

      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Pucsum"
        width="200"
        height="300"
        style="view-transition-name: hero1;"

      />

      <div class="bg-blue-800 w-36 h-36"
        style="view-transition-name: hero2;">

      </div>
    </section>


  `,
})
export default class ViewTransitionComponent {

  //para animar las transiciones y hacerlas más bonitas

}
