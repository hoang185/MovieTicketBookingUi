import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private http: HttpClient) {}

  logout() {
    this.http.post('https://localhost:44348/api/auth/logout', {}, { withCredentials: true }).subscribe(() => {
      this.router.navigate(['/login']); // Chuyển về trang login
    });
  }
}
