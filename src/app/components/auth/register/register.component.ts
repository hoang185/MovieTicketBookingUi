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

  register() {//register là method ko có tham số truyền vào, ko có giá trị trả về (nếu ko định nghĩa kiểu trả về thì hiểu là void)
    this.authService.register(this.user).subscribe({//Vì register() trả về Observable, nên ta phải subscribe() để lắng nghe kết quả.
      complete: () => {
        console.log('Đăng ký thành công:');
        alert('Đăng ký thành công!');
      },
      error: (err) => {
        console.error('Lỗi:', err.error.message);
        alert('Đăng ký thất bại');
      }
  });
  }
}
