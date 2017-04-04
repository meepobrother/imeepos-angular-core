import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFixedBottomComponent } from './pay-fixed-bottom.component';

describe('PayFixedBottomComponent', () => {
  let component: PayFixedBottomComponent;
  let fixture: ComponentFixture<PayFixedBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFixedBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayFixedBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
