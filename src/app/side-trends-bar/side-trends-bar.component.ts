import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavLinkTypes, navLinkTypeForRoute } from 'src/helpers/general';
import { Trend } from './trend-item-view/trend-item-view.component';

@Component({
  selector: 'app-side-trends-bar',
  templateUrl: './side-trends-bar.component.html',
  styleUrls: ['./side-trends-bar.component.scss']
})
export class SideTrendsBarComponent implements OnInit {


  searchFieldText = '';

  linkType: NavLinkTypes;
  NavLinkTypes = NavLinkTypes;

  constructor(
    private router: Router,
  ){
    
    this.linkType = navLinkTypeForRoute(router.url) ?? NavLinkTypes.home;

    router.events.subscribe(args => {
      if (args instanceof NavigationEnd){
        this.linkType = navLinkTypeForRoute(args.url) ?? NavLinkTypes.home;    
      }
    })
  }

  ngOnInit(): void {
    
  }

}
