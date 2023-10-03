import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTimeSlotsListComponent } from './block-time-slots-list.component';

describe('BlockTimeSlotsListComponent', () => {
  let component: BlockTimeSlotsListComponent;
  let fixture: ComponentFixture<BlockTimeSlotsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTimeSlotsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTimeSlotsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
