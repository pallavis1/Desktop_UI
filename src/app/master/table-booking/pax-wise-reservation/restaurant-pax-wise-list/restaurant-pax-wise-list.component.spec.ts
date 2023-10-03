import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPaxWiseListComponent } from './restaurant-pax-wise-list.component';

describe('RestaurantPaxWiseListComponent', () => {
  let component: RestaurantPaxWiseListComponent;
  let fixture: ComponentFixture<RestaurantPaxWiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantPaxWiseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPaxWiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
