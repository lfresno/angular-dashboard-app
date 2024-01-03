import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'shared-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
    <h1 [ngClass]="['w-full h-[600px]', cssClass]">
      Hola mundo me ha costado despertar
    </h1>
  `,
  styles: ``
})
export class HeavyLoadersSlowComponent {

  @Input({required: true}) cssClass! : string;

  constructor() {
    console.log('Hola heavy loader ');

    const start = Date.now();
    while( Date.now() - start < 3000) {}  //bloqueamos el navegador por tres segundos. Esto sólo lo hacemos para probar. NO SE DEBE HACER
  }
}
