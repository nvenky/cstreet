import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <navbar></navbar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>  
    `
})
export class AppComponent  { name = 'Caring Street'; }
