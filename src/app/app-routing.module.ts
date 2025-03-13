import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'register', component: RegisterComponent}, // Định nghĩa URL cho trang đăng ký
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }, // Chỉ vào được nếu đã đăng nhập
  { path: 'admin', redirectTo: '/login', pathMatch: 'full' } // Mặc định chuyển hướng đến Login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
