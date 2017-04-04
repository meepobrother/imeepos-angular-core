import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTypesComponent } from './pay-types.component';

describe('PayTypesComponent', () => {
  let component: PayTypesComponent;
  let fixture: ComponentFixture<PayTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
