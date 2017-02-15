import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { ENV } from '../env';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService {

  private bookingsUrl = ENV.BASE_API_URL + '/users/';

  constructor(private authHttp: AuthHttp) { }

  getBookings(): Observable<Booking[]> {
   return this.authHttp.get(this.bookingsUrl)
              .map(response => response.json().data as Booking[]);
  }
}
