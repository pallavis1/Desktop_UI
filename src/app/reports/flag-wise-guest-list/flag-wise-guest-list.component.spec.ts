import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagWiseGuestListComponent } from './flag-wise-guest-list.component';

describe('FlagWiseGuestListComponent', () => {
  let component: FlagWiseGuestListComponent;
  let fixture: ComponentFixture<FlagWiseGuestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagWiseGuestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagWiseGuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
