import { Component } from '@angular/core';
import {PayMoneyItem} from "./base/pay-money/pay-money.component";
import {UserCardInfo} from "./base/user-card/user-card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image: string = 'assets/tuan-download.png';

  moneyItems: PayMoneyItem[];

  constructor(){
    this.moneyItems = [
      {
        title: '年费',
        desc: '6折优惠',
        on: true,
        price: 120,
        tip: '优惠'
      },
      {
        title: '季度',
        desc: '6折优惠',
        on: false,
        price: 50,
        tip: '优惠'
      },
      {
        title: '月',
        desc: '6折优惠',
        on: false,
        price: 15,
        tip: '优惠'
      },
      {
        title: '日',
        desc: '6折优惠',
        on: false,
        price: 1,
        tip: '优惠'
      },
    ]
  }

  onSelect(e: PayMoneyItem){
    this.total = e.price;
    this.youhui = 0;
  }

  info: UserCardInfo = {
    avatar: '/assets/tuan-download.png',
    nickname: '游客啊',
    mobile: '13140415408',
    login: true,
    tip: '请登录请登录请登录请登录'
  }


  showDownloadBox: boolean = true;

  clickDownLoad(){
    console.log('我点击了领取');
  }

  //支付
  total: number = 10;
  youhui: number = 2;

  onPay(){
    console.log('去支付')
  }
}
