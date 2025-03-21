import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seat } from '../../../models/seat.model';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../../common/constant';
import { SeatSelectRequest } from './seatSelectRequest.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-seat-select',
  standalone: false,
  templateUrl: './seat-select.component.html',
  styleUrl: './seat-select.component.css'
})

export class SeatSelectComponent {
  selectedData: any = {};
  seatSelectRequest: SeatSelectRequest | undefined;
  seats: Seat[][] = [
    [
      { id: 'A1', type: 'normal', status: 'available' },
      { id: 'A2', type: 'normal', status: 'available' },
      { id: 'A3', type: 'normal', status: 'available' },
      { id: 'A4', type: 'normal', status: 'available' },
      { id: 'A5', type: 'normal', status: 'available' }
    ],
    [
      { id: 'B1', type: 'vip', status: 'available' },
      { id: 'B2', type: 'vip', status: 'unavailable' },
      { id: 'B3', type: 'vip', status: 'unavailable' },
      { id: 'B4', type: 'vip', status: 'available' },
      { id: 'B5', type: 'vip', status: 'unavailable' }
    ],
    [
      { id: 'C1', type: 'vip', status: 'available' },
      { id: 'C2', type: 'vip', status: 'available' },
      { id: 'C3', type: 'vip', status: 'unavailable' },
      { id: 'C4', type: 'vip', status: 'available' },
      { id: 'C5', type: 'vip', status: 'available' }
    ],
    [
      { id: 'L1', type: 'sweetbox', status: 'available' },
      { id: 'L2', type: 'sweetbox', status: 'available' },
      { id: 'L3', type: 'sweetbox', status: 'available' },
      { id: 'L4', type: 'sweetbox', status: 'unavailable' },
      { id: 'L5', type: 'sweetbox', status: 'available' }
    ]
  ];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedData = {
        movieName: params['movieName'],
        movieId: params['movieId'],
        date: params['date'],
        day: params['day'],
        city: params['city'],
        cinema: params['cinema'],
        cinemaId: params['cinemaId'],
        time: params['time']
      };

    });
  }

  selectSeat(seat: Seat) {
    if (seat.status === 'available') {
      seat.status = 'selected';
    } else if (seat.status === 'selected') {
      seat.status = 'available';
    }
  }

  getSeatClass(seat: Seat): string {
    return `seat ${seat.type} ${seat.status}`;
  }

  goToNextPage() {
    // Lấy danh sách ghế đã chọn (status: 'selected')
    const selectedSeats = this.seats
      .flat() // Chuyển mảng 2D thành 1D
      .filter(seat => seat.status === 'selected') // Chỉ lấy ghế có status = 'selected'
      .map(seat => seat.id); // Lấy danh sách ID ghế
    const userId = this.authService.getUserIdFromCookie();
    if (userId === null) {
      alert('Vui lòng đăng nhập để tiếp tục!');
    }
    // Cập nhật dữ liệu ghế đã chọn vào `seatSelectRequest`
    this.seatSelectRequest = {
      movieId: this.selectedData.movieId,
      cinemaId: this.selectedData.cinemaId,
      date: this.selectedData.date,
      time: this.selectedData.time,
      seatIds: selectedSeats, // Gửi danh sách ghế đã chọn
      userId: userId
    };

    // Gửi dữ liệu lên API
    this.http.post(`${BASE_URL}/movie/seat-select`, this.seatSelectRequest).subscribe({
      next: (response) => {
        console.log('Dữ liệu đã gửi thành công', response);

        // Chuyển hướng sang trang thanh toán
        this.router.navigate(['/checkout'], { state: { selectedData: this.selectedData } });
      },
      error: (error) => {
        console.error('Lỗi khi gửi dữ liệu', error.error.message);
      }
    });

  }
}
