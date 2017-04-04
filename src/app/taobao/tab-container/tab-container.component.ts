import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface TabContainerListItem{
  title: string;
  icon: string;
  on: boolean;
}

export interface TabContainerItem{
  title: string;
  list: TabContainerListItem[],
  on: boolean;
}

@Component({
  selector: '[meepo-tab-container]',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {

  @Input() tabs: TabContainerItem[];
  list: TabContainerListItem[];
  slideUp: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.slideUp = false;
  }

  _clickList(item){
    this.onClick.emit(item);
    this.slideUp = false;
    this.tabs.map(res=>{
      res.on = false;
    })
  }

  _click(item){
    if(item.on){
      //关闭
      this.slideUp = false;
      this.tabs.map(res=>{
        res.on = false;
      })
    }else{
      this.tabs.map(res=>{
        res.on = false;
      });
      item.on = true;
      this.slideUp = true;
      this.list = item.list;
    }
  }

  ngOnInit() {
    this.tabs = this.tabs || [
        {
          title: '全部分类',
          list: [
            {
              title: '全部分类',
              icon: '',
              on: true
            }
          ],
          on: false
        },
        {
          title: '智能排序',
          list: [
            {
              title: '智能排序',
              icon: '',
              on: true
            }
          ],
          on: false
        },
        {
          title: '满减',
          list: [
            {
              title: '满减',
              icon: '',
              on: true
            }
          ],
          on: false
        },
        {
          title: '其他',
          list: [
            {
              title: '其他',
              icon: '',
              on: true
            }
          ],
          on: false
        }
      ]
  }

}
