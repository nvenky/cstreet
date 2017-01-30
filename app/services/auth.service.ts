import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig } from './auth.config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


// Avoid name not found warnings
declare var Auth0Lock: any;
declare var options: any;

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
 userAuthorized = new BehaviorSubject<string>(null);
  public userAuthorizedObservable = this.userAuthorized.asObservable();


  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getUserInfo(authResult.accessToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
          return;
        }
        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userAuthorized.next(authResult.idTokenPayload.sub);
      });
    });
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
    localStorage.removeItem('id_token');
  };
}
