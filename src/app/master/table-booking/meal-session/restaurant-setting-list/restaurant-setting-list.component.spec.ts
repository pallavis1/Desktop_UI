import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSettingListComponent } from './restaurant-setting-list.component';

describe('RestaurantSettingListComponent', () => {
  let component: RestaurantSettingListComponent;
  let fixture: ComponentFixture<RestaurantSettingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSettingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSettingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
