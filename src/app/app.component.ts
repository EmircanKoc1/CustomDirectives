import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example1Directive } from './directives/example1.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Example1Directive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CustomDirectives';
}
