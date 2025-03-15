import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  // Xử lý đăng nhập khi form submit
  login() {
    this.authService.login(this.user).subscribe({
      next: (response) => {
        console.log('Đăng nhập thành công:', response);
        if (response.success) {
          alert('Đăng nhập thành công!');
          this.router.navigate(['/admin']); // Chuyển hướng sau khi đăng nhập
        }
        else{
          alert('Đăng nhập thất bại!');
        }
      },
      error: (error) => {
        console.error('Lỗi đăng nhập:', error.message);
        alert('Đăng nhập thất bại!');
      }
    });
  }
}
