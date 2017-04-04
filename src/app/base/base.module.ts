import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadBoxComponent } from './download-box/download-box.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    DownloadBoxComponent,
    ErrorComponent
  ],
  declarations: [
    DownloadBoxComponent,
    ErrorComponent
  ]
})
export class BaseModule { }
