import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <home></home>
    <router-outlet></router-outlet>
    `
})
export class AppComponent  { name = 'Caring Street'; }
