import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutes } from './common/routes';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { SeatSelectComponent } from './components/movie/seat-select/seat-select.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent}, // Định nghĩa URL cho trang đăng ký
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }, // Chỉ vào được nếu đã đăng nhập
  { path: 'movies', component: MovieComponent , canActivate: [AuthGuard]},// vào được trang movies nhưng phải đăng nhập mới lấy được tài nguyên
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'seat-select', component: SeatSelectComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
