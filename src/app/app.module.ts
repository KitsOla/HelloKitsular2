import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Page1Component } from './components/page1component/page1.component';
import { Page2Component } from './components/page2component/page2.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: 
  	[ 
  		AppComponent,
  		Page1Component,
  		Page2Component
   	],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
