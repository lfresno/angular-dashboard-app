import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,  //para que se detecten los cambios al cambiar las señales, y no todo el tiempo
  //esto mejora mucho la performance de Angular, ya que tendrá menos trabajo
  template: `
    <shared-title [title]="currentFramework()"/>

    <pre> {{frameworkAsSignal() | json }} </pre>
    <hr>
    <pre> {{frameworkAsProperty | json }} </pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });


  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {

    setTimeout( () => {
      // this.frameworkAsProperty.name= 'React';
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }))
      // this.frameworkAsSignal.update( value => {
      //   value.name = 'React';
      //   return value;
      // })

      console.log('Hecho');
    }, 2000);
  }

}
