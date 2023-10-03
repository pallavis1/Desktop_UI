import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMasterComponent } from './restaurant-master.component';

describe('RestaurantMasterComponent', () => {
  let component: RestaurantMasterComponent;
  let fixture: ComponentFixture<RestaurantMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
