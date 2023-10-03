import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMasterListComponent } from './restaurant-master-list.component';

describe('RestaurantMasterListComponent', () => {
  let component: RestaurantMasterListComponent;
  let fixture: ComponentFixture<RestaurantMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
