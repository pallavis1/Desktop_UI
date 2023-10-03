import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorMasterComponent } from './floor-master.component';

describe('FloorMasterComponent', () => {
  let component: FloorMasterComponent;
  let fixture: ComponentFixture<FloorMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
