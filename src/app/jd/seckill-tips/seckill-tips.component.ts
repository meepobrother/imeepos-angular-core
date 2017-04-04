import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[meepo-seckill-tips]',
  templateUrl: './seckill-tips.component.html',
  styleUrls: ['./seckill-tips.component.css']
})
export class SeckillTipsComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  show: boolean;
  @Input() html: string;

  constructor() {
    this.show = true;
  }

  close(){
    this.onClose.emit('close')
  }
  ngOnInit() {
  }

}
