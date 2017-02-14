import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  styles: [`
  	h1{
  		color: #7ac4bb;
  	}
  `],
})
export class AppComponent  { name = 'Kits'; }
