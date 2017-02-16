import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
    <nav>
      <a routerLink="/page1" routerLinkActive="active">First page</a>
      <a routerLink="/page2" routerLinkActive="active">Second Page</a>
    </nav>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app/css/app.component.css'],
})
export class AppComponent  { 
	name = 'Hello Kits'; 
}
