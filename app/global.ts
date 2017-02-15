import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Auth } from './services/auth.service';

@Injectable()
export class Global {
    public currentUser: User;
    constructor(private auth: Auth) {
        this.auth.currentUserObservable.subscribe((user: User) => {
            this.currentUser = user;
        });
    }
}
