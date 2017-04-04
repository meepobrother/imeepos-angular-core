import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalepostComponent } from './salepost/salepost.component';
import { PostIndexComponent } from './post-index/post-index.component';
import { PostTipComponent } from './post-tip/post-tip.component';
import { PostUploadComponent } from './post-upload/post-upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    SalepostComponent,
    PostIndexComponent,
    PostTipComponent,
    PostUploadComponent
  ],
  declarations: [
    SalepostComponent,
    PostIndexComponent,
    PostTipComponent,
    PostUploadComponent
  ]
})
export class Top58Module { }
