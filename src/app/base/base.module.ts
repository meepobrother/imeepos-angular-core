import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadBoxComponent } from './download-box/download-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    DownloadBoxComponent
  ],
  declarations: [
    DownloadBoxComponent
  ]
})
export class BaseModule { }
