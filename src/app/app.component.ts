import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  			<kits-page1></kits-page1>
  			<kits-page2></kits-page2>
  			<kits-page3></kits-page3>`,
  styleUrls: ['./app/css/app.component.css'],
})
export class AppComponent  { name = 'Kits'; }
