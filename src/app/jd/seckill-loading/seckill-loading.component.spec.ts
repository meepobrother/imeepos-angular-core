import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeckillLoadingComponent } from './seckill-loading.component';

describe('SeckillLoadingComponent', () => {
  let component: SeckillLoadingComponent;
  let fixture: ComponentFixture<SeckillLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeckillLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeckillLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
