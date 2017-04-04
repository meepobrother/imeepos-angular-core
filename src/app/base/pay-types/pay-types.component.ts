import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
export interface PayTypesItem{
  title: string;
  tip: string;
  image: string;
  on: boolean;
}
@Component({
  selector: '[meepo-pay-types]',
  templateUrl: './pay-types.component.html',
  styleUrls: ['./pay-types.component.css']
})
export class PayTypesComponent implements OnInit {
  @Input() items: PayTypesItem[];
  @Output() onSelect: EventEmitter<PayTypesItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(item){
    this.items.map(res=>{
      res.on = false;
    })
    item.on = true;
    this.onSelect.emit(item)
  }

}
