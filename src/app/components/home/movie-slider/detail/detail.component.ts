import { Component, Input, Output, EventEmitter, SimpleChanges, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() selectedMovie: any; // Nhận dữ liệu phim từ component cha
  @Input() show: boolean = false; // Điều khiển hiển thị popup
  @Output() closePopupEvent = new EventEmitter<void>();//// Sự kiện gửi về cha khi đóng popup

  closePopup() {
    this.closePopupEvent.emit(); // Gửi sự kiện về component cha
    this.show = false;
  }
  constructor(private cdr: ChangeDetectorRef) {}

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('Thay đổi:', changes);

  //   // Nếu show thay đổi, buộc Angular cập nhật UI
  //   if (changes['show'] || changes['movie']) {
  //     this.cdr.detectChanges();
  //   }
  // }
}
