import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSettingComponent } from './restaurant-setting.component';

describe('RestaurantSettingComponent', () => {
  let component: RestaurantSettingComponent;
  let fixture: ComponentFixture<RestaurantSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
