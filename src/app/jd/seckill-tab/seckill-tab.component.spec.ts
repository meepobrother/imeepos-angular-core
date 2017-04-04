import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeckillTabComponent } from './seckill-tab.component';

describe('SeckillTabComponent', () => {
  let component: SeckillTabComponent;
  let fixture: ComponentFixture<SeckillTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeckillTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeckillTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
