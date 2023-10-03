import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPlanMapComponent } from './floor-plan-map.component';

describe('FloorPlanMapComponent', () => {
  let component: FloorPlanMapComponent;
  let fixture: ComponentFixture<FloorPlanMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorPlanMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorPlanMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
