import { Component } from '@angular/core';
import { User }    from '../../models/user';

@Component({
  moduleId: module.id,
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: [ 'signup.component.css' ]
})
export class SignupComponent {
  model = new User('', '', '', '', '', '', '', '');

  signup(event:any){
    event.preventDefault();
    console.log('Form Data: ');
    console.log(this.model);
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
