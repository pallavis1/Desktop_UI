import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMasterListComponent } from './table-master-list.component';

describe('TableMasterListComponent', () => {
  let component: TableMasterListComponent;
  let fixture: ComponentFixture<TableMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
