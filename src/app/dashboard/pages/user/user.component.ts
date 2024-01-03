import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
    <shared-title [title]="titleLabel()"/>

    @if (user()) {
      <section>
        <img
          [srcset]="user()!.avatar"
          [alt]="user()!.first_name"
        />

        <div>
          <h3> {{user()!.first_name}} {{user()!.last_name}} </h3>
        </div>

      </section>

    } @else {
      <p>Cargando info</p>
    }
  `,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  public usersService = inject(UsersService);


  // public user = signal< User | undefined >(undefined);
  //permite transformar un observable en una señal
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );


  public titleLabel = computed(() => {
    if (this.user()) {
      return 'Info del usuario';
    }

    return 'No teneos info';
  })

}
