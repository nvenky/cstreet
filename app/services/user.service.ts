import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { GlobalVariables } from '../global';
import 'rxjs/add/operator/map';
// import { ReplaySubject } from 'rxjs';

@Injectable()
export class UserService {
    private userBaseUrl = GlobalVariables.BASE_API_URL + '/users/';
    // public currentUser = new ReplaySubject(1);

    constructor(private authHttp: AuthHttp) {
        // this.currentUser.subscribe((user: User) => console.log('Got current user details.', user));
    }

    getUser(authId: string): Observable<User> {
        return this.authHttp.get(this.userBaseUrl + authId)
            .map(response => response.json().data as User);
            // .subscribe(result => currentUser.next(result))
    }

}
