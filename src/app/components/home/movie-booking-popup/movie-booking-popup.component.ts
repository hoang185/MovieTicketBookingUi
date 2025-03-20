import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-booking-popup',
  standalone: false,
  templateUrl: './movie-booking-popup.component.html',
  styleUrl: './movie-booking-popup.component.css'
})

export class MovieBookingPopupComponent {

  constructor(private router: Router) { }

  @Input() showTicketPopup: boolean = false;
  @Input() selectedMovie: any; // Dữ liệu phim được truyền từ MovieList
  @Output() closeTicketPopup = new EventEmitter<void>();

  data = [
    {
      date: 19,
      month: 3,
      day: 'Wed',
      cities: [
        {
          city: 'Hồ Chí Minh',
          cinemas: [
            {
              name: 'CGV Hùng Vương Plaza',
              times: ['14:40 PM', '17:10 PM', '19:40 PM']
            },
            {
              name: 'CGV Menas Mall',
              times: ['15:25 PM', '16:45 PM', '20:15 PM']
            }
          ]
        },
        {
          city: 'Hà Nội',
          cinemas: [
            {
              name: 'CGV Vincom Bà Triệu',
              times: ['13:00 PM', '16:30 PM', '19:00 PM']
            },
            {
              name: 'Lotte Landmark',
              times: ['14:00 PM', '17:15 PM', '20:30 PM']
            }
          ]
        },
        {
          city: 'Đà Nẵng',
          cinemas: [
            {
              name: 'CGV Vĩnh Trung Plaza',
              times: ['15:00 PM', '18:00 PM', '21:00 PM']
            },
            {
              name: 'Lotte Đà Nẵng',
              times: ['14:20 PM', '16:50 PM', '19:30 PM']
            }
          ]
        }
      ]
    },
    {
      date: 20,
      month: 3,
      day: 'Thu',
      cities: [
        {
          city: 'Hồ Chí Minh',
          cinemas: [
            {
              name: 'CGV Hùng Vương Plaza',
              times: ['12:00 PM', '15:30 PM', '19:10 PM']
            },
            {
              name: 'CGV Menas Mall',
              times: ['14:00 PM', '16:30 PM', '21:00 PM']
            }
          ]
        },
        {
          city: 'Hà Nội',
          cinemas: [
            {
              name: 'CGV Vincom Bà Triệu',
              times: ['11:30 AM', '14:45 PM', '18:20 PM']
            },
            {
              name: 'Lotte Landmark',
              times: ['12:15 PM', '16:00 PM', '19:45 PM']
            }
          ]
        },
        {
          city: 'Đà Nẵng',
          cinemas: [
            {
              name: 'CGV Vĩnh Trung Plaza',
              times: ['13:40 PM', '17:20 PM', '20:50 PM']
            },
            {
              name: 'Lotte Đà Nẵng',
              times: ['12:10 PM', '15:30 PM', '19:00 PM']
            }
          ]
        }
      ]
    }
  ];

  selectedDate = this.data[0]; // Mặc định chọn ngày đầu tiên
  selectedCity = this.selectedDate.cities[0]; // Mặc định chọn thành phố đầu tiên

  selectedTime: string | null = null;
  selectedCinema: string | null = null;

  selectTime(cinemaName: string, time: string) {
    if (this.selectedCinema === cinemaName) {
      this.selectedTime = time; // Cập nhật giờ đã chọn trong rạp hiện tại
    } else {
      this.selectedCinema = cinemaName; // Cập nhật rạp mới
      this.selectedTime = time; // Chọn giờ đầu tiên của rạp mới
    }
  }

  closePopupOutside(event: Event) {
    if (this.showTicketPopup) {
      this.showTicketPopup = false;
      this.closeTicketPopup.emit();
    }
  }

  // Hàm chuyển hướng
  goToSeatSelection() {
    if (this.selectedDate && this.selectedCity && this.selectedCinema && this.selectedTime) {
      this.router.navigate(['/seat-select'], {
        // query params để truyền dữ liệu qua trang SeatSelect thông qua URL (ví dụ: /seat-select?date=19/3&day=Wed&city=Hồ Chí Minh&cinema=CGV Hùng Vương Plaza&time=14:40 PM)
        queryParams: {
          movieName: this.selectedMovie,
          date: `${this.selectedDate.date}/${this.selectedDate.month}`,
          day: this.selectedDate.day,
          city: this.selectedCity.city,
          cinema: this.selectedCinema,
          time: this.selectedTime
        }
      });
    } else {
      alert('Vui lòng chọn ngày, thành phố, rạp và giờ chiếu trước khi tiếp tục!');
    }
  }
}
