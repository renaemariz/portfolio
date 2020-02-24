import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas  } from '@fortawesome/free-solid-svg-icons';
import about from './home.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent implements OnInit {
  public developments: any;
  public tools: any;
  public experiences: any;
  public projects:any;
  public information: any;

  constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
        this.experiences = Object.values(about.experience);
        this.developments = about.skills.development;
        this.tools = about.skills.tools;
        this.projects = Object.values(about.projects);
 }

  ngOnInit(): void {

  }

  scrollTo(target) {                                                    
     document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'center'});
  }        

}
