import { Component, OnInit } from '@angular/core';
import { getRandomTweets } from 'src/helpers/general';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tweets = getRandomTweets(20);

}
