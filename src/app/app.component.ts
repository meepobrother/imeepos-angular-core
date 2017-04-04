import { Component } from '@angular/core';
import {PayMoneyItem} from "./base/pay-money/pay-money.component";
import {UserCardInfo} from "./base/user-card/user-card.component";
import {PayTypesItem} from "./base/pay-types/pay-types.component";
import {SeckillTabItem} from "./jd/seckill-tab/seckill-tab.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

tips: string;
constructor(){
  this.tips = '1111';
}

  // items: SeckillTabItem[];
  // endTime: Date;
  //
  // constructor(){
  //   this.endTime = new Date();
  //   this.endTime.setDate(this.endTime.getDate() + 1)
  //   this.items = [
  //     {
  //       title: '秒杀中',
  //       time: '12:00',
  //       on: true
  //     },
  //     {
  //       title: '尚未开始',
  //       time: '13:00',
  //       on: false
  //     },
  //     {
  //       title: '尚未开始',
  //       time: '14:00',
  //       on: false
  //     },{
  //       title: '尚未开始',
  //       time: '15:00',
  //       on: false
  //     },{
  //       title: '尚未开始',
  //       time: '16:00',
  //       on: false
  //     },
  //   ]
  // }
  //
  // onselect(item){
  //   console.log(item)
  // }

  // image: string = 'assets/tuan-download.png';
  //
  // moneyItems: PayMoneyItem[];
  //
  // constructor(){
  //   this.moneyItems = [
  //     {
  //       title: '年费',
  //       desc: '6折优惠',
  //       on: true,
  //       price: 120,
  //       tip: '优惠'
  //     },
  //     {
  //       title: '季度',
  //       desc: '6折优惠',
  //       on: false,
  //       price: 50,
  //       tip: '优惠'
  //     },
  //     {
  //       title: '月',
  //       desc: '6折优惠',
  //       on: false,
  //       price: 15,
  //       tip: '优惠'
  //     },
  //     {
  //       title: '日',
  //       desc: '6折优惠',
  //       on: false,
  //       price: 1,
  //       tip: '优惠'
  //     },
  //   ]
  // }
  //
  // onSelect(e: PayMoneyItem){
  //   this.total = e.price;
  //   this.youhui = 0;
  // }
  //
  // info: UserCardInfo = {
  //   avatar: '/assets/tuan-download.png',
  //   nickname: '小明',
  //   mobile: '13140415408',
  //   login: true,
  //   tip: '会员到期时间2018-3-4'
  // }
  //
  // payTypes: PayTypesItem[] = [
  //   {
  //     title: '微信支付',
  //     tip: '9.8折',
  //     image: './assets/c-pay-weixin.png',
  //     on: true
  //   },
  //   {
  //     title: '支付宝支付',
  //     tip: '9.5折',
  //     image: './assets/c-pay-zfb.png',
  //     on: false
  //   },
  //   {
  //     title: '余额支付',
  //     tip: '9折',
  //     image: './assets/c-pay-tel.png',
  //     on: false
  //   },
  // ]
  //
  //
  //
  // showDownloadBox: boolean = true;
  //
  // clickDownLoad(){
  //   console.log('我点击了领取');
  // }
  //
  // //支付
  // total: number = 10;
  // youhui: number = 2;
  //
  // onPay(){
  //   console.log('去支付')
  // }
}
