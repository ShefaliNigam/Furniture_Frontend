import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalComponent } from './carousal.component';

describe('CarousalComponent', () => {
  let component: CarousalComponent;
  let fixture: ComponentFixture<CarousalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarousalComponent]
    });
    fixture = TestBed.createComponent(CarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
