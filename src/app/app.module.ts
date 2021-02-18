

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { SideBarNavLinkComponent } from './side-nav-bar/side-bar-nav-link/side-bar-nav-link.component';
import { SideTrendsBarComponent } from './side-trends-bar/side-trends-bar.component';
import { FormsModule } from '@angular/forms';
import { TrendItemViewComponent } from './side-trends-bar/trend-item-view/trend-item-view.component';
import { TweetViewComponent } from './tweet-view/tweet-view.component';
import { TweetBottomButtonComponent } from './tweet-view/tweet-bottom-button/tweet-bottom-button.component';
import { HomeComponent } from './routes/home/home.component';
import { SearchComponent } from './routes/search/search.component';
import { UnimplementedScreenComponent } from './routes/unimplemented-screen/unimplemented-screen.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    SideBarNavLinkComponent,
    SideTrendsBarComponent,
    TrendItemViewComponent,
    TweetViewComponent,
    TweetBottomButtonComponent,
    HomeComponent,
    SearchComponent,
    UnimplementedScreenComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

