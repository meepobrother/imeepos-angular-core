import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeckillTabComponent } from './seckill-tab/seckill-tab.component';
import { SeckillItemsHeadComponent } from './seckill-items-head/seckill-items-head.component';
import { SeckillItemsListComponent } from './seckill-items-list/seckill-items-list.component';
import { SeckillLoadingComponent } from './seckill-loading/seckill-loading.component';
import { SeckillTipsComponent } from './seckill-tips/seckill-tips.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    SeckillTabComponent,
    SeckillItemsHeadComponent,
    SeckillItemsListComponent,
    SeckillLoadingComponent,
    SeckillTipsComponent
  ],
  declarations: [
    SeckillTabComponent,
    SeckillItemsHeadComponent,
    SeckillItemsListComponent,
    SeckillLoadingComponent,
    SeckillTipsComponent
  ]
})
export class JdModule { }
