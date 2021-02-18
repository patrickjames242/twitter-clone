import { Component, Input, OnInit } from '@angular/core';

export interface Trend{
  title: string;
  category: string;
  numOfTweets: number;
}


@Component({
  selector: 'app-trend-item-view',
  templateUrl: './trend-item-view.component.html',
  styleUrls: ['./trend-item-view.component.scss']
})
export class TrendItemViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() trend: Trend = {
    title: 'Boosie',
    category: 'Hip hop',
    numOfTweets: 35420,
  }

}
