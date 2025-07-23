import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/movies" routerLinkActive="active">List</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
