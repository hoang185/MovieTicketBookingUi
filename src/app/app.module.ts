import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdminComponent } from './components/admin/admin/admin.component';
import { MovieSliderComponent } from './components/home/movie-slider/movie-slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './components/home/home/home.component';
import { HighLightDirective } from './directives/high-light/high-light.directive';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { DetailComponent } from './components/home/movie-slider/detail/detail.component';
import { MovieBookingPopupComponent } from './components/home/movie-booking-popup/movie-booking-popup.component';
import { SeatSelectComponent } from './components/movie/seat-select/seat-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    MovieSliderComponent,
    HomeComponent,
    HighLightDirective,
    MovieComponent,
    MovieDetailComponent,
    DetailComponent,
    MovieBookingPopupComponent,
    SeatSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  exports: [MovieSliderComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // Thêm Interceptor
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
