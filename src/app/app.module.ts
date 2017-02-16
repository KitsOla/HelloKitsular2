import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Page1Component } from './components/page1component/page1.component';
import { Page2Component } from './components/page2component/page2.component';
import { Page3Component } from './components/page3component/page3.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: 
  	[ 
  		AppComponent,
  		Page1Component,
  		Page2Component,
  		Page3Component
   	],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
