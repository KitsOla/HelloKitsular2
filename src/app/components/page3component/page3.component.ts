import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
		private activatedRoute: ActivatedRoute,
		) {
  	}

ngOnInit() {
	this.activatedRoute.params.subscribe((params: Params) => {
		if(params['id']){
			this.id = params['id'];
		} else{
			this.id = 'No parameters';
		}
		});
	}
}
