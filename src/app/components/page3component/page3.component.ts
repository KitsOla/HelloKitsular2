import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'kits-page3',
  templateUrl: './app/components/page3component/page3.component.html',
  styleUrls: [ 
  	'./app/css/app.component.css',
  	'./app/components/page3component/page3.component.css'
  	 ]
})

export class Page3Component implements OnInit {
	id: any;
	constructor(
		private location: Location,
		private route : ActivatedRoute,
		){
  	}

	ngOnInit(): void{
	
	this.route.params.subscribe(
        params => 
        if(params.id){
        	this.id = params.id
        } else {
        	this.id = "Parameter not sent."
        }); 
	}

}