import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelManagementListComponent } from './channel-management-list.component';

describe('ChannelManagementListComponent', () => {
  let component: ChannelManagementListComponent;
  let fixture: ComponentFixture<ChannelManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
