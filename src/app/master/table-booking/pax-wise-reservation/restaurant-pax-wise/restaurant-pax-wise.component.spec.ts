import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPaxWiseComponent } from './restaurant-pax-wise.component';

describe('RestaurantPaxWiseComponent', () => {
  let component: RestaurantPaxWiseComponent;
  let fixture: ComponentFixture<RestaurantPaxWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantPaxWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPaxWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
