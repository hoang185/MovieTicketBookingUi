import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSliderComponent } from '../movie-slider/movie-slider.component';
import { HomeComponent } from './home.component';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, MovieSliderComponent, SlickCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
