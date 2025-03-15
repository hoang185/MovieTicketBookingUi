import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSliderComponent } from './movie-slider.component';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

describe('MovieSliderComponent', () => {
  let component: MovieSliderComponent;
  let fixture: ComponentFixture<MovieSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieSliderComponent, SlickCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
