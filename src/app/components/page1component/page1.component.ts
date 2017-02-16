import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'kits-page1',
  templateUrl: './app/components/page1component/page1.component.html',
  styleUrls: [ './app/components/page1component/page1.component.css' ]
})

export class Page1Component implements OnInit{
    id: string;
    constructor(private router:Router) { 
 }

  update(value: string) {
    if(value){ 
      this.id = value; 
    }
  }

 ngOnInit(): void{
   this.id = "No value entered";
 }

  gotoPage3(): void {
    this.router.navigate(['/page3', this.id]);
  }
}