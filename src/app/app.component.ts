import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  styles: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>>
    <app-footer></app-footer>
    `,
})
export class AppComponent {
  title = 'MSU-Konnect';
}
