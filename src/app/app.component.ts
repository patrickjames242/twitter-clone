import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { appRoutes, navLinkTypeForRoute, NavLinkTypes, titleForNavLinkType } from 'src/helpers/general';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  shouldShowTitleView = true;
  title = '';

  NavLinkTypes = NavLinkTypes;

  linkType: NavLinkTypes;

  constructor(
    private router: Router,
  ){
    
    this.linkType = navLinkTypeForRoute(router.url) ?? NavLinkTypes.home;

    router.events.subscribe(args => {
      if (args instanceof NavigationEnd){
        window.scrollTo(0, 0);
        this.linkType = navLinkTypeForRoute(args.url) ?? NavLinkTypes.home;    
      }
    });

  }

  titleForNavLinkType = titleForNavLinkType;

  ngOnInit(){

  }


}
