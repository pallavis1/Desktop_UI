import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterMasterListComponent } from './parameter-master-list.component';

describe('ParameterMasterListComponent', () => {
  let component: ParameterMasterListComponent;
  let fixture: ComponentFixture<ParameterMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
