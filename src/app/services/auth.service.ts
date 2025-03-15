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
  return this.http.post(`${this.apiUrl}/register`, user, { withCredentials: true });
}

login(credentials: { email: string, password: string }): Observable<any> {
  return this.http.post(`${this.apiUrl}/login`, credentials, { withCredentials: true });
}

// 🛑 KHÔNG cần lưu token vào localStorage nữa
// 🛑 KHÔNG cần getToken() vì trình duyệt tự gửi cookie khi gọi API

logout(): Observable<any> {
  return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true });
}

// Kiểm tra user có đăng nhập không (dựa vào API)
isLoggedIn(): Observable<boolean> {
  return this.http.get<boolean>(`${this.apiUrl}/isLoggedIn`, { withCredentials: true });
}
}
