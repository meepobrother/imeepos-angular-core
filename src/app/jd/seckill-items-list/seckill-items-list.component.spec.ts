import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeckillItemsListComponent } from './seckill-items-list.component';

describe('SeckillItemsListComponent', () => {
  let component: SeckillItemsListComponent;
  let fixture: ComponentFixture<SeckillItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeckillItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeckillItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
