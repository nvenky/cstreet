import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { ENV } from '../env';
import 'rxjs/add/operator/map';
// import { ReplaySubject } from 'rxjs';

@Injectable()
export class UserService {
    private userBaseUrl = ENV.BASE_API_URL + 'users/';

    constructor(private authHttp: AuthHttp) {
    }

    getUser(authId: string): Observable<User> {
        return this.authHttp.get(this.userBaseUrl + authId)
            .map(response => response.json() as User);
    }

    update(user: User): any {
        return this.authHttp.put(this.userBaseUrl + user.id, user)
            .map(response => response.json() as User);
    }
  }
