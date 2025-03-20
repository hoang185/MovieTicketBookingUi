import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private validateUrl = 'https://localhost:44348/api/auth/validate'; // API kiểm tra đăng nhập

  constructor(private router: Router, private http: HttpClient) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.http.get(this.validateUrl, { withCredentials: true }).pipe(
      map(() => true), // Nếu API trả về 200 OK => Cho phép truy cập
      catchError(() => {
        // Chuyển hướng đến trang login và truyền returnUrl
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return of(false);
      })
    );
  }
}
