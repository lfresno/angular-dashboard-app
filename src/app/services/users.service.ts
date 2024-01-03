import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse, UserIDResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface State {
  loader: boolean,
  users: User[],
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  //# hace que la propiedad sea privada. Puede ser útil al traducir este código a javascript (mo pillaría el private pero sí el #)
  #state = signal<State>({
    loader: true,
    users: []
  });

  //señal computada de solo lectura
  public users = computed(() => this.#state().users);
  public loaders = computed(() => this.#state().loader);

  constructor() {
    // console.log('cargando data');

    this.http.get<UserResponse>('https://reqres.in/api/users')
      .subscribe(res => {

        this.#state.set({
          loader: false,
          users: res.data,
        })
      });
  }

  getUserById(id: string) {

    return this.http.get<UserIDResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        map(resp => resp.data)
      );
  }
}
