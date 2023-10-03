import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorMasterListComponent } from './floor-master-list.component';

describe('FloorMasterListComponent', () => {
  let component: FloorMasterListComponent;
  let fixture: ComponentFixture<FloorMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
