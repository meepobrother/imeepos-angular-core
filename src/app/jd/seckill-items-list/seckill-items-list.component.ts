import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'meepo-seckill-items-list',
  templateUrl: './seckill-items-list.component.html',
  styleUrls: ['./seckill-items-list.component.css']
})
export class SeckillItemsListComponent implements OnInit {
  @Input() items: any[];
  constructor() { }

  ngOnInit() {
  }

}
