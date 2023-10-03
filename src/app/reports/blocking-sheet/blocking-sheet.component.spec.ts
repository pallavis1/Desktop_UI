import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockingSheetComponent } from './blocking-sheet.component';

describe('BlockingSheetComponent', () => {
  let component: BlockingSheetComponent;
  let fixture: ComponentFixture<BlockingSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockingSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
