import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestViewStatusComponent } from './guest-view-status.component';

describe('GuestViewStatusComponent', () => {
  let component: GuestViewStatusComponent;
  let fixture: ComponentFixture<GuestViewStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestViewStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestViewStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
