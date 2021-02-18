import { Component, Input, OnChanges, OnInit } from '@angular/core';


export enum ButtonType{
  comment, 
  retweet,
  like
}

@Component({
  selector: 'app-tweet-bottom-button',
  templateUrl: './tweet-bottom-button.component.html',
  styleUrls: ['./tweet-bottom-button.component.scss']
})
export class TweetBottomButtonComponent implements OnInit  {

  constructor() { }

  ButtonType = ButtonType;

  @Input() buttonType = ButtonType.comment;
  @Input() count = 27;

  ngOnInit(): void {
  }
  
  classForButtonType(buttonType: ButtonType){
    switch (this.buttonType){
      case ButtonType.comment: return 'comment';
      case ButtonType.retweet: return 'retweet';
      case ButtonType.like: return 'like';
    }
  }

}
