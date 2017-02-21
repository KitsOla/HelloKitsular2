import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a class="navlink" routerLink="/page1" routerLinkActive="active">First page</a>
      <a class="navlink" routerLink="/page2" routerLinkActive="active">Second Page</a>
    </nav>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app/css/app.component.css'],
})
export class AppComponent  {
}
