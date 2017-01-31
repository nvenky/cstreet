import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig } from './auth.config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';
import { UserService } from './user.service';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    private options = {
        auth: {
            params: {
                scope: 'openid name email'
            }
        },
        theme: {
            logo: 'images/logo.png',
            primaryColor: 'green'
        }
    };

    private lock = new Auth0Lock(myConfig.clientID, myConfig.domain, this.options);
    currentUserSubject = new BehaviorSubject<User>(null);
    public currentUserObservable = this.currentUserSubject.asObservable();
    private currentUser: User;
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', (authResult: any) => {
            localStorage.setItem('id_token', authResult.idToken);
            this.lock.getUserInfo(authResult.accessToken, (error: any, profile: any) => {
                if (error) {
                    console.log(error);
                    return;
                }
                localStorage.setItem('accessToken', authResult.accessToken);
                localStorage.setItem('sub', authResult.idTokenPayload.sub);
                localStorage.setItem('profile', JSON.stringify(profile));
                this.fetchUser(authResult.idTokenPayload.sub);
            });
        });

        if (this.authenticated()) {
            this.fetchUser(localStorage.getItem('sub'));
        }
    }


    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        this.currentUser = null;
        localStorage.removeItem('id_token');
    };

    private fetchUser(authId: string) {
        if (this.currentUser == null || this.currentUser.authId !== authId) {
            this.userService.getUser(authId).subscribe((user: User) => {
                this.currentUser = user;
                this.currentUserSubject.next(user);
            });
        }
    }
}
