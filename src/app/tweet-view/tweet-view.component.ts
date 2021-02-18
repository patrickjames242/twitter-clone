
import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/helpers/general';
import { ButtonType } from './tweet-bottom-button/tweet-bottom-button.component';




@Component({
  selector: 'app-tweet-view',
  templateUrl: './tweet-view.component.html',
  styleUrls: ['./tweet-view.component.scss']
})
export class TweetViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  BottomButtonType = ButtonType;

  @Input() tweet: Tweet = {
    authorImage: '/assets/lawrenceKrauss.jpg',
    authorName: 'Lawrence M. Krauss',
    authorUserName: 'LKrauss1',
    text: 'Hi. Mid February and hoping to get books in the mail to congress by beginning of March. Please consider donating to help them follow the science.',
    time: '38m',
  };

}
