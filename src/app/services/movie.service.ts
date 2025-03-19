import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetail } from '../components/movie/movie-detail/movie-detail.model';

@Injectable({//dùng để đăng ký 1 service vào root injector và có thể tiêm vào 1 constructor (DI)
  providedIn: 'root'// Đăng ký toàn cục, không cần thêm vào providers ở module
})
export class MovieService {
  private apiUrl = 'https://localhost:44348/api/Movie'; // Đổi URL cho đúng

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/index');
  }
  getMovieById(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.apiUrl}/detail/${id}`);
  }
}
