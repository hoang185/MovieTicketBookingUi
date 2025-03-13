import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:44348/api/auth'; // Đổi URL API của bạn

  constructor(private http: HttpClient) {}//khai báo thuộc tính http trực tiếp trong constructor

// methodName(parameters): returnType {
//     // Nội dung của method
//     return value;
// }
// logMessage(message: string): void {
//   console.log(message);
// }
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  // Gửi request đăng nhập
  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Lưu token vào Local Storage
  saveToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  // Lấy token từ Local Storage
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  // Xóa token khi đăng xuất
  logout() {
    localStorage.removeItem('jwtToken');
  }

  // Kiểm tra user có đang đăng nhập không
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
