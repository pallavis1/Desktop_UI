import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagMasterListComponent } from './flag-master-list.component';

describe('FlagMasterListComponent', () => {
  let component: FlagMasterListComponent;
  let fixture: ComponentFixture<FlagMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
