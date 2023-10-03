import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappMasterTemplateComponent } from './whatsapp-master-template.component';

describe('WhatsappMasterTemplateComponent', () => {
  let component: WhatsappMasterTemplateComponent;
  let fixture: ComponentFixture<WhatsappMasterTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappMasterTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappMasterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
