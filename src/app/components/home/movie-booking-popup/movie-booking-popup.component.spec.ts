import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBookingPopupComponent } from './movie-booking-popup.component';

describe('MovieBookingPopupComponent', () => {
  let component: MovieBookingPopupComponent;
  let fixture: ComponentFixture<MovieBookingPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieBookingPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieBookingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
