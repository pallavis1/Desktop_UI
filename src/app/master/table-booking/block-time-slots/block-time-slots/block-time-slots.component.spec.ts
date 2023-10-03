import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTimeSlotsComponent } from './block-time-slots.component';

describe('BlockTimeSlotsComponent', () => {
  let component: BlockTimeSlotsComponent;
  let fixture: ComponentFixture<BlockTimeSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTimeSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
