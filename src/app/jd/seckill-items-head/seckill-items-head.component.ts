import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[meepo-seckill-items-head]',
  templateUrl: './seckill-items-head.component.html',
  styleUrls: ['./seckill-items-head.component.css']
})
export class SeckillItemsHeadComponent implements OnInit {
  @Input() endTime: Date;
  @Input() tip: string;

  hour: number;
  minute: number;
  second: number;
  constructor() { }

  ngOnInit() {
    this.intval();
  }

  intval(){
    setInterval(()=>{
      const now = new Date();
      const leftTime: number = this.endTime.getTime() - now.getTime();
      const leftSecond: number = Math.floor(leftTime / 1000);
      this.hour = Math.floor( (leftSecond) / 3600);
      this.minute = Math.floor( ( leftSecond - this.hour * 3600) / 60);
      this.second = Math.floor( (leftSecond - this.hour * 3600 - this.minute * 60))
    },1000)
  }

}
