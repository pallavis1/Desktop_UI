import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOTEventMasterComponent } from './bot-event-master.component';

describe('BOTEventMasterComponent', () => {
  let component: BOTEventMasterComponent;
  let fixture: ComponentFixture<BOTEventMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOTEventMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOTEventMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
