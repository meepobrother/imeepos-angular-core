import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'meepo-download-box',
  templateUrl: './download-box.component.html',
  styleUrls: ['./download-box.component.css']
})
export class DownloadBoxComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  constructor() { }
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onSuccess: EventEmitter<any> = new EventEmitter();

  close(){
    this.onClose.emit('close')
  }

  go(){
    this.onSuccess.emit('success');
  }

  ngOnInit() {
    this.image = this.image || 'assets/tuan-download.png';
    this.title = this.title || '立即领取';
  }

}
