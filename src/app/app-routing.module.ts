import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component }   from './components/page1component/page1.component';
import { Page2Component }      from './components/page2component/page2.component';
import { Page3Component }      from './components/page3component/page3.component';

const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: 'page1',  component: Page1Component },
  { path: 'page2',  component: Page2Component },
  { path: 'page3',  component: Page3Component },
  { path: 'page3/:id',  component: Page3Component },
  { path: '**', redirectTo: '/page1', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
