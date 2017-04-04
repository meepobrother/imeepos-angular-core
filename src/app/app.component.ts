import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image: string = 'assets/tuan-download.png';

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
