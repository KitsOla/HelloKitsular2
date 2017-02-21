import { Component, OnInit } from '@angular/core';
import { User } from './user';

const USERS : User[] = [
   	{
   		id: 1,
   		firstname: 'Millie Bobby',
   		lastname: 'Brown'
   	},
   	{
   		id: 2,
   		firstname: 'Gaten',
   		lastname: 'Matarazzo'
   	},
     {
       id: 3,
       firstname: 'Winona',
       lastname: 'Ryder'
     }
,
     {
       id: 4,
       firstname: 'Finn',
       lastname: 'Wolfhard'
     }
,
     {
       id: 5,
       firstname: 'Natalia',
       lastname: 'Dyer'
     }
,
     {
       id: 6,
       firstname: 'Charlie',
       lastname: 'Heaton'
     }
];

@Component({
  selector: 'kits-page2',
  templateUrl: './app/components/page2component/page2.component.html',
  styleUrls: [ './app/css/app.component.css',
               './app/components/page2component/page2.component.css' ]
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