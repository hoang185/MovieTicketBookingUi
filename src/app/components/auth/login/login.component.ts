import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // ✅ Sửa styleUrl thành styleUrls
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  // Xử lý đăng nhập khi form submit
  login() {
    this.authService.login(this.user).subscribe({
      next: (response) => {
        console.log('Đăng nhập thành công:', response);
        if (response.success) {
          alert('Đăng nhập thành công!');

          // ✅ Lấy returnUrl từ queryParams hoặc mặc định về '/admin'
          let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
          // ✅ Giải mã returnUrl nếu bị mã hóa hai lần
          returnUrl = decodeURIComponent(decodeURIComponent(returnUrl));
           // ✅ Tách path và query parameters
           const urlParts = returnUrl.split('?');
           const path = urlParts[0]; // "seat-select"
           const queryParamsString = urlParts[1] || ''; // "movieName=Avengers:%20Endgame&date=19%2F3..."
 
           // ✅ Chuyển đổi query params string thành object
           const queryParams = this.parseQueryParams(queryParamsString);
 
           // ✅ Chuyển hướng bằng router.navigate
           this.router.navigate([path], { queryParams });
        } else {
          alert('Đăng nhập thất bại!');
        }
      },
      error: (error) => {
        console.error('Lỗi đăng nhập:', error.message);
        alert('Đăng nhập thất bại!');
      }
    });
  }

  // Hàm chuyển đổi query string thành object
  private parseQueryParams(queryString: string): any {
    return queryString
      ? Object.fromEntries(new URLSearchParams(queryString).entries())
      : {};
  }
}
