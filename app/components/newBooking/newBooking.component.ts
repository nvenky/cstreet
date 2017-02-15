import { Component } from '@angular/core';
import { BookingService } from './../../services/booking.service';
import { Booking } from './../../models/booking';
import { Global } from '../../global';

@Component({
    moduleId: module.id,
    selector: 'newBooking',
    providers: [ BookingService ],
    templateUrl: 'newBooking.component.html' //
    // styleUrls: [ 'booking.component.css' ]
})
export class NewBookingComponent {
    public newBooking: Booking;

    constructor (bookingService: BookingService, global: Global ) {
        let user = global.currentUser;
        this.newBooking = new Booking(user.elderFirstName, user.elderLastName, user.address, '');
    }
}
