import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutes } from './common/routes';

const routes: Routes = [
  {path: AppRoutes.HOME, component: HomeComponent},
  {path: AppRoutes.REGISTER, component: RegisterComponent}, // Định nghĩa URL cho trang đăng ký
  { path: AppRoutes.LOGIN, component: LoginComponent },
  { path: AppRoutes.ADMIN, component: AdminComponent, canActivate: [AuthGuard] }, // Chỉ vào được nếu đã đăng nhập
  // { path: AppRoutes.ADMIN, redirectTo: '/login', pathMatch: 'full' }, // Mặc định chuyển hướng đến Login
  { path: 'movies', component: MovieComponent , canActivate: [AuthGuard]}// vào được trang movies nhưng phải đăng nhập mới lấy được tài nguyên
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
