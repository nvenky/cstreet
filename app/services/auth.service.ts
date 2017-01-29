import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig } from './auth.config';


// Avoid name not found warnings
declare var Auth0Lock: any;
declare var options: any;

@Injectable()
export class Auth {
  // Configure Auth0
  options = {
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
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, this.options);

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult: any) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.lock.getUserInfo(authResult.accessToken, function(error: any, profile: any) {
        if (error) {
          console.log(error);
          return;
        }
        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));
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
