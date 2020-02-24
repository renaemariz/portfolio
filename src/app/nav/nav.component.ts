import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  ngOnInit(): void {
  }

	isActive = "#profile";

	scrollTo(target) {                  
		this.isActive = target;
	    $('.navbar-collapse').removeClass('show');
	    
	    //scrollTo animation
	    $('html, body').animate({
		  scrollTop: $(target).offset().top - $(".navbar").height()
		}, 1000);
  } 
}
