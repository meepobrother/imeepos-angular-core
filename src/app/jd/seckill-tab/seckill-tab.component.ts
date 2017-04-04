import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
export interface SeckillTabItem{
  time: string;
  title: string;
  on: boolean;
}
@Component({
  selector: '[meepo-seckill-tab]',
  templateUrl: './seckill-tab.component.html',
  styleUrls: ['./seckill-tab.component.css']
})
export class SeckillTabComponent implements OnInit {
  @Input() items: SeckillTabItem[];
  @Output() onSelect: EventEmitter<SeckillTabItem> = new EventEmitter();

  constructor() {}

  click(item){
    this.items.map(res => {
      res.on = false;
    });
    item.on = true;
    this.onSelect.emit(item);
  }

  ngOnInit() {
  }

}
