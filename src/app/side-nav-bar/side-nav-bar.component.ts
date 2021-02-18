import { Component, OnInit } from '@angular/core';
import { NavLinkTypes, allNavLinkTypes } from 'src/helpers/general';


@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  NavLinkTypes = NavLinkTypes;
  allNavLinkTypes = allNavLinkTypes;
}
