import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { MovieDetail } from './movie-detail.model';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})

export class MovieDetailComponent implements OnInit {
  movieId: number | null = null;
  movie: MovieDetail | null = null;
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = Number(params.get('id'));
      if (this.movieId) {
        this.fetchMovieDetail(this.movieId);
      }
    });
  }

  fetchMovieDetail(id: number): void {
    this.isLoading = true;
    this.movieService.getMovieById(id).subscribe({
      next: (data: any) => {
        this.movie = data.data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Không thể tải dữ liệu phim!';
        console.error('Lỗi khi lấy thông tin phim:', error);
        this.isLoading = false;
      }
    });
  }
}
