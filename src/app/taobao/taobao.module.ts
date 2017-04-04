import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContainerComponent } from './tab-container/tab-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    TabContainerComponent
  ],
  declarations: [
    TabContainerComponent
  ]
})
export class TaobaoModule { }
