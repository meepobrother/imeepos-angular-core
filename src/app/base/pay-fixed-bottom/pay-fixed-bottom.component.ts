import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[meepo-pay-fixed-bottom]',
  templateUrl: './pay-fixed-bottom.component.html',
  styleUrls: ['./pay-fixed-bottom.component.css']
})
export class PayFixedBottomComponent implements OnInit {
  @Input() btnTitle: string;
  @Input() total: number;
  @Input() youhui: number;
  @Output() onPay: EventEmitter<any> = new EventEmitter()
  constructor() { }

  goPay(){
    this.onPay.emit('go pay')
  }

  ngOnInit() {
    this.btnTitle = this.btnTitle || '立即支付';
    this.total = this.total || 0;
    this.youhui = this.youhui || 0;
  }

}
