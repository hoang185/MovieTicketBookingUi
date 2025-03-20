import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seat-select',
  standalone: false,
  templateUrl: './seat-select.component.html',
  styleUrl: './seat-select.component.css'
})

export class SeatSelectComponent {
  selectedData: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedData = {
        movieName: params['movieName'],
        date: params['date'],
        day: params['day'],
        city: params['city'],
        cinema: params['cinema'],
        time: params['time']
      };
    });
  }
}
