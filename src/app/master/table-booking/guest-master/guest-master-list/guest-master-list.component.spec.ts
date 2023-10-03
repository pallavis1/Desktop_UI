import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestMasterListComponent } from './guest-master-list.component';

describe('GuestMasterListComponent', () => {
  let component: GuestMasterListComponent;
  let fixture: ComponentFixture<GuestMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
