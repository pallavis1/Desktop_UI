import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAccountLinkupMasterListComponent } from './channel-account-linkup-master-list.component';

describe('ChannelAccountLinkupMasterListComponent', () => {
  let component: ChannelAccountLinkupMasterListComponent;
  let fixture: ComponentFixture<ChannelAccountLinkupMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelAccountLinkupMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelAccountLinkupMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
