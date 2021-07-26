import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipDetailsTabComponent } from './ship-details-tab.component';

describe('ShipDetailsTabComponent', () => {
  let component: ShipDetailsTabComponent;
  let fixture: ComponentFixture<ShipDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipDetailsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
