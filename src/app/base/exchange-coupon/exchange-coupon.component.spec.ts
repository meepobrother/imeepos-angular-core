import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCouponComponent } from './exchange-coupon.component';

describe('ExchangeCouponComponent', () => {
  let component: ExchangeCouponComponent;
  let fixture: ComponentFixture<ExchangeCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
