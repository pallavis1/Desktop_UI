import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagMasterComponent } from './flag-master.component';

describe('FlagMasterComponent', () => {
  let component: FlagMasterComponent;
  let fixture: ComponentFixture<FlagMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
