import { Component, OnInit } from '@angular/core';
import { getRandomTweets } from 'src/helpers/general';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tweets = getRandomTweets(20);

}
