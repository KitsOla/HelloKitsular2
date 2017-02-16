import { Component, OnInit } from '@angular/core';
import { User } from './user';

const USERS : User[] = [
   	{
   		id: 1,
   		firstname: 'Jens',
   		lastname: 'Olsson'
   	},
   	{
   		id: 2,
   		firstname: 'Karl',
   		lastname: 'Bengtsson'
   	},
   	{
   		id: 3,
   		firstname: 'Harald',
   		lastname: 'Rolandsson'
   	}
];

@Component({
  selector: 'kits-page2',
  templateUrl: './app/components/page2component/page2.component.html',
  styleUrls: [ './app/components/page2component/page2.component.css' ]
})

export class Page2Component implements OnInit{
 
 	users = USERS;

   ngOnInit(): void {
     //this.getNames();
   }

   getNames(): void{
   		//users = USERS;
   }
}