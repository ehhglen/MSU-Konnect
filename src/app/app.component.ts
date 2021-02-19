import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <app-navigation></app-navigation>
    <app-homepage></app-homepage>
    <app-footer></app-footer>
    `,
})
export class AppComponent {
  title = 'MSU-Konnect';
}
