import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarboComponent } from './carbo.component';

describe('CarboComponent', () => {
  let component: CarboComponent;
  let fixture: ComponentFixture<CarboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
