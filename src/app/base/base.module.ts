import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadBoxComponent } from './download-box/download-box.component';
import { ErrorComponent } from './error/error.component';
import { PayFixedBottomComponent } from './pay-fixed-bottom/pay-fixed-bottom.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    DownloadBoxComponent,
    ErrorComponent,
    PayFixedBottomComponent,
    LoadingComponent
  ],
  declarations: [
    DownloadBoxComponent,
    ErrorComponent,
    PayFixedBottomComponent,
    LoadingComponent
  ]
})
export class BaseModule { }
