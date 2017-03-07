import { Component } from '@angular/core';
import { BookingService } from './../../services/booking.service';
import { Booking } from './../../models/booking';
import { Contact } from './../../models/contact';
import { Auth } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  providers: [ BookingService, Auth ],
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.css' ]
})

export class HomeComponent {
  bookings: Booking[];
  public model = new Contact('', '', '');

  constructor(auth: Auth, bookingService: BookingService) {

    // bookingService.getBookings().subscribe(
    //   (bookings: Booking[]) => this.bookings = bookings,
    //   (error: any) => console.error('An error occurred', error)
    // );
  }
}
