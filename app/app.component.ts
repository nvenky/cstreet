import { Component } from '@angular/core';
import {Auth} from './services/auth.service';

@Component({
  selector: 'my-app',
  providers: [ Auth ],
  template: `
      <navbar></navbar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    `
})

export class AppComponent  {
  name = 'Caring Street';

  constructor(private auth: Auth) { }
}
