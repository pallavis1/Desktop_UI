import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCreationComponent } from './right-creation.component';

describe('RightCreationComponent', () => {
  let component: RightCreationComponent;
  let fixture: ComponentFixture<RightCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
