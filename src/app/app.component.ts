import { Component, HostBinding } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WOW } from 'wowjs/dist/wow.js';
import { NgwWowService } from 'ngx-wow';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'resume-app';    

		
	constructor(private wowService: NgwWowService){
	      this.wowService.init(); 
	}
}



