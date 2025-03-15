import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {}
// Kiểm tra xem người dùng đã đăng nhập chưa
// Sử dụng API /auth/validate để kiểm tra
// API trả về 200 OK nếu đã đăng nhập
// API trả về 401 Unauthorized nếu chưa đăng nhập
// Nếu đã đăng nhập => Cho phép truy cập
// Nếu chưa đăng nhập => Chuyển hướng đến trang login

  canActivate(): Observable<boolean> {
    return this.http.get('https://localhost:44348/api/auth/validate', { withCredentials: true }).pipe(
      map(() => true), // Nếu API trả về OK => Cho phép truy cập
      catchError(() => {
        this.router.navigate(['/login']); // Nếu API trả lỗi => Chuyển hướng login
        return [false];
      })
    );
  }
}
