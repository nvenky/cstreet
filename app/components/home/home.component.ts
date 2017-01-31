import { Component } from '@angular/core';
import { BookingService } from './../../services/booking.service';
import { Booking } from './../../models/booking';

@Component({
  moduleId: module.id,
  selector: 'home',
  providers: [ BookingService ],
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.css' ]
})

export class HomeComponent {
  bookings: Booking[];

  constructor(bookingService: BookingService) {
    // bookingService.getBookings().subscribe(
    //   (bookings: Booking[]) => this.bookings = bookings,
    //   (error: any) => console.error('An error occurred', error)
    // );
  }
}
