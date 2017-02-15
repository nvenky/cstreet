import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { Booking } from '../../models/booking';
import { Router }from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
    bookings: Booking[] = [];
    constructor(auth: Auth, private router: Router) {
        this.bookings[0] = new Booking('A', 'B', 'St Kilda 3000', '02/04/2017');
        this.bookings[1] = new Booking('C', 'D', 'Point Cook', '22/05/2017');
    }

}
