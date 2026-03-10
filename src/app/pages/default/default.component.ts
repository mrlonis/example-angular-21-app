import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent {
  protected readonly title = signal('example-angular-21-app');
}
