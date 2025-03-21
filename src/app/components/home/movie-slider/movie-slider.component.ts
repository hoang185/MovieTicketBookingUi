import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { Movie } from './movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-slider',
  standalone: false,
  templateUrl: './movie-slider.component.html',
  styleUrl: './movie-slider.component.scss'
})
export class MovieSliderComponent implements OnInit {
  constructor(private movieService: MovieService, private router: Router) {}
  movies: Movie[] = [];
  selectedMovie: Movie = {
    id: 0,
    movieName: '',
    imageUrl: '',
    rating: ''
  };
  showDetailPopup: boolean = false;
  showTicketPopup: boolean = false;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<button class="slick-prev">‹</button>',
    nextArrow: '<button class="slick-next">›</button>',
  };

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: (data) => this.movies = data.data,
      error: (err) => console.error('Error fetching movies', err)
    });
  }

  viewDetails(movie: Movie) {
    this.selectedMovie = movie;
    this.showDetailPopup = true;
  }

  buyTicket(movie: Movie) {
    this.showTicketPopup = true;
    this.selectedMovie = movie;
  }

  closeTicketPopup() {
    this.showTicketPopup = false;
  }

  closePopup() {
    this.showDetailPopup = false;
  }
}
