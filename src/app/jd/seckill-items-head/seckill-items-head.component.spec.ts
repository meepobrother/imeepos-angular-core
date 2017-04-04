import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeckillItemsHeadComponent } from './seckill-items-head.component';

describe('SeckillItemsHeadComponent', () => {
  let component: SeckillItemsHeadComponent;
  let fixture: ComponentFixture<SeckillItemsHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeckillItemsHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeckillItemsHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
