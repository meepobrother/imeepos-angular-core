import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BaseModule} from "./base/base.module";
import {JdModule} from "./jd/jd.module";
import {Top58Module} from "./top58/top58.module";
import {TaobaoModule} from "./taobao/taobao.module";
;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BaseModule,
    JdModule,
    Top58Module,
    TaobaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
