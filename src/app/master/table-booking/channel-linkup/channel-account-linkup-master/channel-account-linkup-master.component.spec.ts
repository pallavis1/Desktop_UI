import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAccountLinkupMasterComponent } from './channel-account-linkup-master.component';

describe('ChannelAccountLinkupMasterComponent', () => {
  let component: ChannelAccountLinkupMasterComponent;
  let fixture: ComponentFixture<ChannelAccountLinkupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelAccountLinkupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelAccountLinkupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
