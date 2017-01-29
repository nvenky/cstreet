import { Injectable } from '@angular/core';
import { Booking } from './../models/booking';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService {
  private bookingsUrl = 'http://localhost:3200/users';

  constructor(private authHttp: AuthHttp) { }

  getBookings(): Observable<Booking[]> {
   return this.authHttp.get(this.bookingsUrl)
              .map(response => response.json().data as Booking[]);
  }

 private handleError(error: any): any {
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
 }
}
