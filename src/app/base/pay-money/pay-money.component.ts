import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
export interface PayMoneyItem{
  price: number;
  desc: string;
  title: string;
  tip: string;
  on: boolean;
}
@Component({
  selector: 'meepo-pay-money',
  templateUrl: './pay-money.component.html',
  styleUrls: ['./pay-money.component.css']
})
export class PayMoneyComponent implements OnInit {
  @Input() items: PayMoneyItem[];
  @Output() onSelect: EventEmitter< PayMoneyItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  select(item){
    this.items.map(res=>{
      res.on = false;
    });
    item.on = true;
    this.onSelect.emit(item)
  }

}
