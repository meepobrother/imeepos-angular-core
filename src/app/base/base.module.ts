import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadBoxComponent } from './download-box/download-box.component';
import { ErrorComponent } from './error/error.component';
import { PayFixedBottomComponent } from './pay-fixed-bottom/pay-fixed-bottom.component';
import { LoadingComponent } from './loading/loading.component';
import {PayMoneyComponent} from './pay-money/pay-money.component';
import { UserCardComponent } from './user-card/user-card.component';
import { PayTypesComponent } from './pay-types/pay-types.component';
import { ExchangeCouponComponent } from './exchange-coupon/exchange-coupon.component';
import { CouponComponent } from './coupon/coupon.component';

export { DownloadBoxComponent } from './download-box/download-box.component';
export { ErrorComponent } from './error/error.component';
export { PayFixedBottomComponent } from './pay-fixed-bottom/pay-fixed-bottom.component';
export { LoadingComponent } from './loading/loading.component';
export {PayMoneyComponent} from './pay-money/pay-money.component';

export { PayMoneyItem } from './pay-money/pay-money.component';
export { UserCardInfo } from './user-card/user-card.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    DownloadBoxComponent,
    ErrorComponent,
    PayFixedBottomComponent,
    LoadingComponent,
    PayMoneyComponent,
    UserCardComponent,
    PayTypesComponent,
    ExchangeCouponComponent,
    CouponComponent
  ],
  declarations: [
    DownloadBoxComponent,
    ErrorComponent,
    PayFixedBottomComponent,
    LoadingComponent,
    PayMoneyComponent,
    UserCardComponent,
    PayTypesComponent,
    ExchangeCouponComponent,
    CouponComponent
  ]
})
export class BaseModule { }
