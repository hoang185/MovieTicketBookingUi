import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

//withCredentials: true là một tùy chọn trong Angular's HttpClient giúp gửi cookie, authentication headers, 
// và chứng chỉ cùng với request tới một domain khác.
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      withCredentials: true // Gửi cookie HttpOnly trong request
    });

    return next.handle(modifiedReq);
  }
}
