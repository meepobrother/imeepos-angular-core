import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'meepo-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  style: any;
  constructor() {
    this.style = {}
  }

  _show: boolean;
  @Input()
  get show(){
    return this._show;
  }
  set show(val: boolean){
    this._show = val;
    if(!this._show){
      this.style = {
        display: 'none',
        opacity: '0'
      }
    }else{
      this.style = {}
    }
  }

  ngOnInit() {

  }

}
