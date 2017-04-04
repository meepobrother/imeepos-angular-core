import {Component, Input, OnInit} from '@angular/core';
export interface UserCardInfo{
  avatar: string;
  nickname: string;
  mobile: string;
  tip: string;
  login: boolean;
}
@Component({
  selector: '[meepo-user-card]',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() info: UserCardInfo;

  constructor() {

  }

  ngOnInit() {
    console.log(this.info);
  }

}
