import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalepostComponent } from './salepost.component';

describe('SalepostComponent', () => {
  let component: SalepostComponent;
  let fixture: ComponentFixture<SalepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
