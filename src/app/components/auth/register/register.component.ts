import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Đăng ký thành công:', response);
        alert('Đăng ký thành công!');
      },
      (error) => {
        console.error('Lỗi:', error.error.message);
        alert('Đăng ký thất bại');
      }
    );
  }
}
