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

  signup(formValue: any): void{
    console.log('Form Data: ');
    console.log(formValue);
  }
}
