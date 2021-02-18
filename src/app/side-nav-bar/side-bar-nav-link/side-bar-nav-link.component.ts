import { Component, Input, OnInit } from '@angular/core';
import { appRoutes, NavLinkTypes, routeForNavLinkType, titleForNavLinkType } from 'src/helpers/general';






@Component({
  selector: 'app-side-bar-nav-link',
  templateUrl: './side-bar-nav-link.component.html',
  styleUrls: ['./side-bar-nav-link.component.scss']
})
export class SideBarNavLinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  NavLinkTypes = NavLinkTypes;
  @Input() navLinkType = NavLinkTypes.home;

  titleForNavLinkType = titleForNavLinkType;
  routeForNavLinkType = routeForNavLinkType;



}
