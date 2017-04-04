import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeckillTipsComponent } from './seckill-tips.component';

describe('SeckillTipsComponent', () => {
  let component: SeckillTipsComponent;
  let fixture: ComponentFixture<SeckillTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeckillTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeckillTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
