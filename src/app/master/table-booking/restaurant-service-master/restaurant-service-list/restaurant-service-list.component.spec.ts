import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantServiceListComponent } from './restaurant-service-list.component';

describe('RestaurantServiceListComponent', () => {
  let component: RestaurantServiceListComponent;
  let fixture: ComponentFixture<RestaurantServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
