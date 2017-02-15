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

    private lock = new Auth0Lock(myConfig.clientID, myConfig.domain);
    public currentUserSubject = new BehaviorSubject<User>(null);
    public currentUserObservable = this.currentUserSubject.asObservable();

    private authenticationSubject = new BehaviorSubject<string>('');
    public authenticationObservable = this.authenticationSubject.asObservable();

    private currentUser: User;

    constructor(private userService: UserService) {
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
                this.fetchUser(authResult.idTokenPayload.sub, true);
            });
        });

        if (this.authenticated()) {
            this.fetchUser(localStorage.getItem('sub'), false);
        }

        this.currentUserObservable.subscribe((user: User) => {
            this.currentUser = user;
        });
    }


    public login(screen: string) {
        // Call the show method to display the widget.
        this.options['initialScreen'] = screen;
        this.lock.show(this.options);
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
        this.authenticationSubject.next('logout');
    };

    private fetchUser(authId: string, login: boolean) {
        if (this.currentUser == null || this.currentUser.authId !== authId) {
            this.userService.getUser(authId).subscribe((user: User) => {
                this.currentUserSubject.next(user);
                if (login) {
                  this.authenticationSubject.next('login');
                }
            });
        }
    }
}
