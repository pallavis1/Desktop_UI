import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOTEventMasterListComponent } from './bot-event-master-list.component';

describe('BOTEventMasterListComponent', () => {
  let component: BOTEventMasterListComponent;
  let fixture: ComponentFixture<BOTEventMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOTEventMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOTEventMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
